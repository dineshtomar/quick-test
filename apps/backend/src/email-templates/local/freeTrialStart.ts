export const freeTrialStart = (name: string, freeTrialDays: number, amount: number, interval: string): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Trial Started Notification</title>
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
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi ${name},</p>
      <p>This is to notify you that your free trial period for ${freeTrialDays} days has started.</p>
      <p>You can enjoy our free services for ${freeTrialDays} days. After that, you will be charged $${amount} per ${interval}.</p>
      <br>
      <b>NOTE: This is an auto-generated email, please do not reply.</b>
      <br><br>
      <p>Warm regards,</p>
      <p>Quick Test Team</p>
    </div>
  </body>
  </html>
`;