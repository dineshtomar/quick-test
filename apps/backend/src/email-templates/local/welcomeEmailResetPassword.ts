export const welcomeEmailResetPassword = (name: string, owner: string, link: string): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Team</title>
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
        color: #777;
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
      <p>Welcome to the team!</p>
      <p>You are receiving this email because ${owner} added you to their Organization. To proceed further, you need to reset your password. Please use the link below to reset the password:</p>
      <br>
      <a href="${link}">Click here to reset your password.</a>
      <br><br>
      <b>*Please note, link access will expire in 24 hours.</b><br>
      <b>*If the reset password link does not work, go to the Quick Test homepage and follow instructions to reset your password by clicking on Forgot Password.</b>
      <br><br>
      <p>Warm regards,</p>
      <p>Quick Test Team</p>
    </div>
  </body>
  </html>
`;