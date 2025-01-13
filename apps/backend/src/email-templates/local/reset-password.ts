export const resetPasswordTemplate = (to: string, resetLink: string) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        padding:24px;
      }
      .header {
        text-align: flex-start;
        font-size: 0.9em;
      }
      .content {
        margin: 20px 0;
        font-size: 0.9em;
      }
      .footer {
        margin-top: 20px;
        font-size: 0.9em;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="header">Hi ${to},</h1>
      <div class="content">
        <p>Someone requested a password reset on your account. If this was you, please use the link below to proceed with your request to reset the password.</p>
        <p><a href="${resetLink}" class="button">Click here to reset your password</a></p>
        <p><small><b>*Please note, link access will expire in 24 hours. If you did not request this, this email can be ignored.*</b></small></p>
      </div>
      <div class="footer">
        <p>Warm Regards,</p>
        <p>Quick Test Team</p>
      </div>
    </div>
  </body>
  </html>
`;