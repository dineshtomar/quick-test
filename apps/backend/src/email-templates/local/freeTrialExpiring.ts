export const freeTrialExpiring = (name: string): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trial Expiry Notification</title>
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
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi ${name},</p>
      <p>This is to notify you that your free trial subscription is expiring in the upcoming two days.</p>
      <p>Please subscribe with us to continue using our services.</p>
      <br>
      <p>Thank you for using Quick Test.</p>
      <br>
      <b>NOTE: This is an auto-generated email, please do not reply.</b>
      <br><br>
      <p>Warm regards,</p>
      <p>Quick Test Team</p>
    </div>
  </body>
  </html>
`;