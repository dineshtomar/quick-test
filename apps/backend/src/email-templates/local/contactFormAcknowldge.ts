export const contactFormAcknowldge = (name: string): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Acknowledgment</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        padding: 20px;
        border-radius: 5px;
      }
      .note {
        font-size: 0.9em;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi ${name},</p>
      <p>Thank you for your interest in our product. We have received your query regarding our product.</p>
      <br>
      <p>Our team will contact you soon.</p>
      <br><br>
      <b>NOTE: This is an auto-generated email, please do not reply.</b>
      <br><br>
      <p>Warm Regards,</p>
      <p>Quick Test Team</p>
    </div>
  </body>
  </html>
`;