export const welcomeEmail = (name: string, verifyLink: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Quick Test</title>
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
    a {
      color: #007BFF;
      text-decoration: none;
    }
    b {
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hi ${name},</p>
    <p>Welcome to Quick Test!</p>
    <p>We’re excited to have you onboard. Experience our Test Case Management Tool used by thousands of the world’s best QA and Dev teams.</p>
    <p>Your organization name is {{ organizationName }}.</p>
    <br>
    <a href="${verifyLink}">Click here to verify your email.</a>
    <br><br>
    <b>NOTE: This is an auto-generated email. Please do not reply.</b><br>
    <b>*If this does not work or you are still stuck, you can alternatively go to the Quick Test homepage and follow instructions to resend the verification link.</b>
    <br><br>
    <p>Warm Regards,</p>
    <p>Quick Test Team</p>
  </div>
</body>
</html>
`;