const nodemailer = require('nodemailer');
// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "Outlook365",
  tls: { ciphers: 'SSLv3' },
  host: 'smtp-mail.outlook.com',
  secure: false,
  port: 587,
  auth: {
    user: "kazisharifulislam52@gmail.com",
    pass: "kazi331@166988",
  },
  debug: true,
  logger: true,
});

// Define the email options
const mailOptions = {
  from: 'kazisharifulislam52@gmail.com',
  to: ['jerome.ramsay@gmail.com', 'talk2sayem@gmail.com', 'kazisharifulislam52@gmail.com', 'bapsujugnu@gufum.com', 'kipihiy238@dalebig.com'], // Recipient's email address
  subject: 'nodemailer test 3 receipients',
  html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
    </style>
  </head>

  <body style="background-color: #f7f7f4">
    <div
      style="
        font-family: 'Poppins', 'Open Sans', 'Roboto', sans-serif;
        font-size: 16px;
        color: #334155;
        line-height: 150%;
        letter-spacing: normal;
        max-width: 600px;
        margin: auto;
      "
    >
      <div style="max-width: 800px; margin: auto; padding: 15px">
        <div
          style="margin: 5px 0 30px; align-items: center; text-align: center"
        >
          <a
            style="text-decoration: none; outline: none"
            href="https://approveage.com"
            target="_blank"
          >
            <img
              style="height: 30px"
              src="https://www.approveage.com/src/icons/download/title-logo.png"
              alt="logo"
              data-bit="iit"
            />
          </a>
        </div>
        <p style="color: #334155; font-weight: 400">
          Hello [Name], <br />
          You've been invited to
          <a
            style="color: #6a8a2a; text-decoration: none"
            href="https://approveage.com"
            >Jane Doe's</a
          >
          mortgage application. Here are the details below about it.
          <!-- download section -->
        </p>

        <table
          role="presentation"
          valign="top"
          border="0"
          cellspacing="0"
          cellpadding="0"
          width="100%"
        >
          <tbody>
            <tr>
              <td style="padding-bottom: 16px; text-align: center">
                <p style="margin: 2px 0">
                  Click the buttons below to join or decline the application
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a
                  href="https://approveage.com"
                  rel="noopener noreferrer"
                  style="
                    display: inline-block;
                    text-decoration: none;
                    background-color: #6a8a2a;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    margin-right: 10px;
                  "
                  target="_blank"
                  >Join Application
                </a>
                <a
                  href="https://approveage.com"
                  rel="noopener noreferrer"
                  style="
                    display: inline-block;
                    text-decoration: none;
                    color: #6a8a2a;
                    padding: 7px 16px;
                    border-radius: 4px;
                    border: 1px solid #6a8a2a;
                    margin-top: 10px;
                  "
                  target="_blank"
                >
                  Decline
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0">
                <p style="color: #334155; font-weight: 400">
                  See you on <br />
                  Approveage, <br />
                  Approaveage Team
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="width: 100%; font-size: 12px">
          <tbody>
            <tr>
              <td>
                <p style="color: #64748b; font-weight: 400">
                  We hope you enjoy using Approveage! <br />
                  If you encounter any issues or have feedback to share, don't
                  hesitate to reach out to our support team at
                  <a
                    style="color: #6a8a2a; text-decoration: none"
                    href="mailto:support@approveage.com"
                    >info@approveage.com</a
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>`,
  attachments: [
    {
      filename: "logo.png",
      path: 'https://www.approveage.com/src/icons/download/title-logo.png',
      cid: "logo.png",
    },
    {
      filename: "playstore.png",
      path: 'https://www.approveage.com/src/icons/download/GooglePlay.png',
      cid: "playstore.png",
    },
    {
      filename: "app-store.png",
      path: 'https://www.approveage.com/src/icons/download/AppStore.png',
      cid: "app-store.png",
    }
  ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  console.log("11111");
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }

  // Close the transporter
  transporter.close();
});