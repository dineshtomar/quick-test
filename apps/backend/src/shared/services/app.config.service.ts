import { ConfigService } from "@nestjs/config";
import { AllConfigType } from "../../config/config.type";

export class AppConfigService {
  constructor(private readonly configService: ConfigService<AllConfigType>) {}

  get isDevelopment(): boolean {
    return (
      this.configService.get("app.nodeEnv", { infer: true }) === "development"
    );
  }

  get isProduction(): boolean {
    return (
      this.configService.get("app.nodeEnv", { infer: true }) === "production"
    );
  }

  get isQa(): boolean {
    return this.configService.get("app.nodeEnv", { infer: true }) === "qa";
  }

  get nodeEnv(): string {
    return (
      this.configService.get("app.nodeEnv", { infer: true }) || "development"
    );
  }

  get fallbackLanguage(): string {
    return this.configService.get("app.fallbackLanguage", { infer: true })
      ? this.configService
          .get("app.fallbackLanguage", { infer: true })
          .toLowerCase()
      : "en";
  }

  get pdfConfig() {
    return {
      common: {
        mimeType: "application/pdf",
        encodingType: "BufferEncoding",
      },
      testCase: {
        fileName: "test_cases.pdf",
      },
      testSuite: {
        fileName: "test_suite.pdf",
      },
      testSuiteResult: {
        fileName: "test_suite_result.pdf",
      },
      // paymentSuccessInvoice: {
      //     fontSize1: this.configService.get("pdf.fontSize1", {infer: true}),
      //     fontSize2: this.configService.get("pdf.fontSize2", {infer: true}),
      //     fontSize3: this.configService.get("pdf.fontSize3", {infer: true}),
      //     fillColor1: this.configService.get("pdf.fillColor1", {infer: true}),
      //     fillColor2: this.configService.get("pdf.fillColor2", {infer: true}),
      //     fillColor3: this.configService.get("pdf.fillColor3", {infer: true}),
      //     fillColor4: this.configService.get("pdf.fillColor4", {infer: true}),
      //     titleHeight: this.configService.get("pdf.titleHeight", {infer: true}),
      //     lineWidth: this.configService.get("pdf.lineWidth", {infer: true}),
      //     titleLeftMargin: this.configService.get("pdf.titleLeftMargin", {infer: true}),
      //     titleStart: this.configService.get("pdf.titleStart", {infer: true}),
      //     invoiceStart: this.configService.get("pdf.invoiceStart", {infer: true}),
      //     invoiceHeight: this.configService.get("pdf.invoiceHeight", {infer: true}),
      //     billingAddressHeight: this.configService.get("pdf.billingAddressHeight", {infer: true}),
      //     billingAddressStart: this.configService.get("pdf.billingAddressStart", {infer: true}),
      //     purchaseDetailsLeftMargin: this.configService.get("pdf.purchaseDetailsLeftMargin", {infer: true}),
      //     headingsHeight: this.configService.get("pdf.headingsHeight", {infer: true}),
      //     headingsStart: this.configService.get("pdf.headingsStart", {infer: true}),
      //     quantityLeftMargin: this.configService.get("pdf.quantityLeftMargin", {infer: true}),
      //     quantityWdith: this.configService.get("pdf.quantityWdith", {infer: true}),
      //     descriptionWidth: this.configService.get("pdf.descriptionWidth", {infer: true}),
      //     detailsHeight: this.configService.get("pdf.descriptionWidth", {infer: true}),
      //     detailsStart: this.configService.get("pdf.detailsStart", {infer: true}),
      //     taxHeight: this.configService.get("pdf.taxHeight", {infer: true}),
      //     taxStart: this.configService.get("pdf.taxStart", {infer: true}),
      //     totalHeight: this.configService.get("pdf.totalHeight", {infer: true}),
      //     totalStart: this.configService.get("pdf.totalStart", {infer: true}),
      //     policyHeight: this.configService.get("pdf.policyHeight", {infer: true}),
      //     policyStart: this.configService.get("pdf.policyStart", {infer: true}),
      //     endStart: this.configService.get("pdf.endStart", {infer: true}),
      //     endLeftMargin: this.configService.get("pdf.endStart", {infer: true}),
      //     policyLine1: this.configService.get("pdf.policyLine1", {infer: true}),
      //     policyLine2: this.configService.get("pdf.policyLine2", {infer: true}),
      //     policyLine3: this.configService.get("pdf.policyLine3", {infer: true}),
      //     policyLine4: this.configService.get("pdf.policyLine4", {infer: true}),
      //     policyLine5: this.configService.get("pdf.policyLine5", {infer: true}),
      //     policyLine6: this.configService.get("pdf.policyLine6", {infer: true}),
      //     textHeight: this.configService.get("pdf.textHeight", {infer: true}),
      //     policyLine1Start: this.configService.get("pdf.policyLine1Start", {infer: true}),
      //     policyLine2Start: this.configService.get("pdf.policyLine2Start", {infer: true}),
      //     policyLine3Start: this.configService.get("pdf.policyLine3Start", {infer: true}),
      //     policyLine4Start: this.configService.get("pdf.policyLine4Start", {infer: true}),
      //     policyLine5Start: this.configService.get("pdf.policyLine5Start", {infer: true}),
      //     policyLine6Start: this.configService.get("pdf.policyLine6Start", {infer: true})
      // }
    };
  }
}
