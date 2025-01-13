import { BadRequestException, Injectable } from "@nestjs/common";
//import * as dotenv from "dotenv";
import { MailerService } from "@nestjs-modules/mailer";
import { UserEntity } from "../../service-users/user/user.entity";
import { ALLOWED_LANGUAGES } from "../../common/constants/lang";
import { Subjects } from "../../common/constants/subject";
import { FreeTrial } from "../../common/enums/days-enum";
import { ConfigService } from "@nestjs/config";
import { AllConfigType } from "../../config/config.type";
import { writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from 'fs';
import { UtilsService } from "src/_helpers/utils.service";
import { resetPasswordTemplate } from "src/email-templates/local/reset-password";
import { join } from 'path';
import { welcomeEmail } from "src/email-templates/local/welcomeEmail";
import { contactFormAcknowldge } from "src/email-templates/local/contactFormAcknowldge";
import { verifyEmail } from "src/email-templates/local/verifyEmail";
import { freeTrialStart } from "src/email-templates/local/freeTrialStart";
import { freeTrialExpiring } from "src/email-templates/local/freeTrialExpiring";
import { freeTrialExpired } from "src/email-templates/local/freeTrialExpired";

//dotenv.config();

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>,
  ) { }

  // context is variable's which we are going to use in mail template
  sendEmail(
    to: string,
    cc: string[],
    bcc: string[],
    subject: string,
    template: string,
    context: Record<string, unknown>,
  ): boolean {
    this.mailerService
      .sendMail({
        to,
        from: `<${this.configService.getOrThrow("email.defaultEmail", {
          infer: true,
        })}>`,
        subject,
        template,
        context,
        cc,
        bcc,
      })
      .then(() => { })
      .catch(() => { });
    return true;
  }

  sendCalenderEmail(
    sendto: string,
    subject: string,
    template: string,
    context: Record<string, unknown>,
    calendarObj?: Record<string, unknown>,
  ): any {
    const mailOptions = {
      to: sendto,
      from: this.configService.getOrThrow("email.defaultEmail", {
        infer: true,
      }),
      subject,
      template,
      context,
      alternatives: null,
    };
    if (calendarObj) {
      const alternatives = {
        contentType: "application/ics",
        content: Buffer.from(calendarObj.toString()),
      };
      mailOptions.alternatives = alternatives;
    }
    this.mailerService
      .sendMail(mailOptions)
      .then(() => { })
      .catch(() => { });
    return true;
  }

  getUserLanguage = (lang) =>
    ALLOWED_LANGUAGES.includes(lang) ? lang : ALLOWED_LANGUAGES[0];

  /**
   * Internal generic method to call send email
   * @param email
   * @param subject
   * @param template
   * @param context
   * @returns boolean
   */
  async callSendEmail(
    email: string,
    subject: string,
    template: string,
    context: Record<string, unknown>,
    lang?: string
  ): Promise<boolean> {
    if (!email || !template) return false;
    if (process.env.NODE_ENV === 'development') this.saveAndOpenEmail(subject, context, lang);
    else this.sendEmail(email, [], [], subject, template, context);
    return true;
  }

  /**
   * Internal method to save and open email locally
   * @param subject
   * @param context
   */
  private saveAndOpenEmail(subject: string, context: Record<string, any>, userLanguage: string) {
    try {
      const emailContent = this.getEmailContentForLocal(subject, context, userLanguage);
      const dirPath = './local-emails';
      const filePath = `${dirPath}/${subject.replace(/\s/g, "")}.html`;
      // Clear the folder before creating the file
      this.clearFolder(dirPath);
      // Write the new file
      writeFileSync(filePath, emailContent);
      // Open the file in the default browser
      UtilsService.openInBrowser(filePath);
    } catch (error) {
      console.error('Error saving or opening email locally:', error.message);
    }
  }
  private getEmailContentForLocal = (subject: string, context: Record<string, any>, userLanguage: string) => {
    let emailContent: string = '';
    switch (subject) {
      case Subjects[userLanguage].WELCOME_MAIL:
        emailContent = welcomeEmail(context.name, context.link);
        return emailContent;
      case Subjects[userLanguage].RESET_PASSWORD:
        emailContent = resetPasswordTemplate(context.name, context.link);
        return emailContent;
      case Subjects[userLanguage].ACKNOWLEDGE_MAIL:
        emailContent = contactFormAcknowldge(context.name);
        return emailContent;
      case Subjects[userLanguage].VERIFY_EMAIL:
        emailContent = verifyEmail(context.name, context.link);
        return emailContent;
      case Subjects[userLanguage].FREETRIAL_START:
        emailContent = freeTrialStart(context.name, context.freeTrialDays, context.amount, context.interval);
        return emailContent;
      case Subjects[userLanguage].FREETRIAL_ENDING:
        emailContent = freeTrialExpiring(context.name);
        return emailContent;
      case Subjects[userLanguage].FREETRIAL_ENDED:
        emailContent = freeTrialExpired(context.name);
        return emailContent;
      default:
        break;
    }
  }

  private clearFolder(dirPath: string) {
    if (existsSync(dirPath)) {
      const files = readdirSync(dirPath); // Get all files in the directory
      for (const file of files) {
        unlinkSync(join(dirPath, file)); // Delete each file
      }
    } else {
      mkdirSync(dirPath, { recursive: true }); // Create the directory if it doesn't exist
    }
  }

  /**
   * Internal method to send welcome mail after registration
   * @param user
   * @param verifyLink
   * @returns boolean
   */
  async sendWelcomeNewUserEmail(
    user: UserEntity,
    verifyLink: string,
    lang: string,
  ): Promise<boolean> {
    if (!user) throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = this.getUserLanguage(lang);
    const { email } = user;
    const subject = Subjects[userLanguage].WELCOME_MAIL;
    const template = `./email-templates/${userLanguage}/body/welcome-email.${userLanguage}.hbs`;
    const context = {
      name: user.firstName,
      organizationName: user.organization?.name,
      verifyLink,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);
    return res;
  }

  /**
   * Internal method to send welcome and reset password email
   * to newly added member
   * @param member
   * @param requestedBy
   * @param passwordResetLink
   * @returns boolean
   */
  async sendWelcomeMemberEmail(
    member: UserEntity,
    requestedBy: UserEntity,
    passwordResetLink: string,
    lang: string,
  ): Promise<boolean> {
    if (!member) throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = this.getUserLanguage(lang);
    const { email } = member;
    const subject = Subjects[userLanguage].WELCOME_MAIL;
    const template = `./email-templates/${userLanguage}/body/welcome-email-reset-password.${userLanguage}.hbs`;
    const context = {
      name: member.firstName,
      link: passwordResetLink,
      owner: requestedBy?.firstName,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);
    return res;
  }

  /**
   * Internal method to send acknowledgement email
   * after receiving contact form
   * @param email
   * @param name
   * @returns boolean
   */
  async sendContactFormAcknowledgementEmail(
    email: string,
    name: string,
    lang: string,
  ): Promise<boolean> {
    if (!email) throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = this.getUserLanguage(lang);
    const subject = Subjects[userLanguage].ACKNOWLEDGE_MAIL;
    const template = `./email-templates/${userLanguage}/body/contact-form-acknowledgement.${userLanguage}.hbs`;
    const context = {
      name,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);

    return res;
  }

  /**
   * Internal method to send reset password link
   * @param user
   * @param resetLink
   * @returns boolean
   */
  async sendResetPasswordLink(
    user: UserEntity,
    resetLink: string,
    lang: string,
  ): Promise<boolean> {
    if (!user) throw new BadRequestException("translations.ACTION_FAILED");
    let userLanguage = this.getUserLanguage(lang);
    userLanguage = user.language;
    const { email } = user;
    const subject = Subjects[userLanguage].RESET_PASSWORD;
    const template = `./email-templates/${userLanguage}/body/reset-password.${userLanguage}.hbs`;
    const context = {
      name: user?.firstName,
      link: resetLink,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);
    return res;
  }

  /**
   * Internal method to send email verification link
   * @param user
   * @param verifyLink
   * @returns boolean
   */
  async resendEmailVerificationLink(
    user: UserEntity,
    verifyLink: string,
    lang: string,
  ): Promise<boolean> {
    if (!user) throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = this.getUserLanguage(lang);
    const { email } = user;
    const subject = Subjects[userLanguage].VERIFY_EMAIL;
    const template = `./email-templates/${userLanguage}/body/verify-email.${userLanguage}.hbs`;
    const context = {
      name: user?.firstName,
      verifyLink,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);
    return res;
  }

  /**
   * Internal method to payment failed email to user
   * @param user
   * @returns boolean
   */
  async sendFreeTrialStartMail(
    user: UserEntity,
    unit_amount,
    interval,
    lang,
  ): Promise<boolean> {
    if (!user?.email)
      throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = this.getUserLanguage(lang);
    const { email } = user;
    const subject = Subjects[userLanguage].FREETRIAL_START;
    const template = `./email-templates/${userLanguage}/body/free-trial-start.${userLanguage}.hbs`;
    const context = {
      name: user?.firstName,
      freeTrialDays: FreeTrial.TRIAL_DAYS,
      amount: unit_amount / 100,
      interval,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);

    return res;
  }

  /**
   * Internal Method to send email for freeTrial
   * expiring in two days
   * @param user
   * @returns boolean
   */
  async sendUserFreeTrialExpiringMail(user: UserEntity): Promise<boolean> {
    if (!user?.email)
      throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = user.language;
    const { email } = user;
    const subject = Subjects[userLanguage].FREETRIAL_ENDING;
    const template = `./email-templates/${userLanguage}/body/free-trial-expiring-mail.${userLanguage}.hbs`;
    const context = {
      name: user?.firstName,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);
    return res;
  }

  /**
   * Internal Method to send email for freeTrial
   * expiry
   * @param user
   * @returns boolean
   */
  async sendUserFreeTrialExpiredMail(user: UserEntity): Promise<boolean> {
    if (!user?.email)
      throw new BadRequestException("translations.ACTION_FAILED");
    const userLanguage = user.language;
    const { email } = user;
    const subject = Subjects[userLanguage].FREETRIAL_ENDED;
    const template = `./email-templates/${userLanguage}/body/free-trial-expired-mail.${userLanguage}.hbs`;
    const context = {
      name: user?.firstName,
    };
    const res = await this.callSendEmail(email, subject, template, context, userLanguage);

    return res;
  }
}
