export const verifyEmail = (name: string, verifyLink: string): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        margin: 30px auto;
        padding: 20px;
      }
      .note {
        font-size: 0.9em;
      }
      a {
        color: #007BFF;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi ${name},</p>
      <p>Please use the link below to verify your email:</p>
      <br>
      <a href="${verifyLink}">Click here to verify your email.</a>
      <br><br>
      <b>*Please note, link access will expire in 24 hours.</b><br>
      <b>*If this does not work or you are still stuck, you can alternatively go to the Quick Test homepage and follow the instructions to resend the email verification link.</b>
      <br><br>
      <p>Warm Regards,</p>
      <p>Quick Test Team</p>
    </div>
  </body>
  </html>
`;