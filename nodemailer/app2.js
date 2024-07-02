const nodemailer = require('nodemailer');
require('dotenv').config()

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "Outlook365",
  tls: { ciphers: 'SSLv3' },
  host: 'smtp-mail.outlook.com',
  secure: false,
  port: 587,
  auth: {
    user: "kazisharifulislam52@gmail.com",
    pass: process.env.NODEMAILER_EMAIL_PASS,
  },
  debug: true,
  logger: true,
});

// Define the email options
const mailOptions = {
  from: 'kazisharifulislam52@gmail.com',
  to: [
    // 'jerome.ramsay@gmail.com',
    'talk2sayem@gmail.com',
    'kazisharifulislam52@gmail.com',
    'yobih11579@dcbin.com'
  ], // Recipient's email address
  subject: 'nodemailer initial email test',

  html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Approveage</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        color: #334155;
      }
      footer p {
        color: #64748b;
        font-weight: 400;
        font-size: 14px;
        width: 100%;
      }
      footer a {
        color: #6a8a2a !important;
        text-decoration: none;
      }
    </style>
  </head>

  <body style="background-color: #f7f7f4">
    <div
      style="
        font-family: 'Poppins', 'Open Sans', 'Roboto', 'Helvetica Neue',
          Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: normal;
        max-width: 600px;
        margin: auto;
        padding: 20px 0;
      "
    >
      <div style="max-width: 500px; margin: auto; padding: 15px">
        <!-- brand logo -->
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
        <!-- message -->
        <p style="font-weight: 400">
          Hello [Realtor First and Last Name], <br />
          You've been invited to [Invitee]’s mortgage application as their real
          agent. Here are the details below about it. You will be updated as
          they move along with the application process.
        </p>

        <!-- application details -->

        <div style="margin: 20px 30px">
          <p style="color: #6c757d; font-size: 14px; margin-bottom: 4px">
            Current Application Step
          </p>
          <p>Financial Review (In-review)</p>

          <p
            style="
              color: #6c757d;
              font-size: 14px;
              margin-top: 20px;
              margin-bottom: 4px;
            "
          >
            Applicants
          </p>
          <div
            style="display: flex; align-items: center; gap: 10px; "
          >
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>
        </div>

        <!-- salutaion -->
        <p style="font-weight: 400">
          See you on <br />
          Approveage, <br />
          Approaveage Team
        </p>
        <!-- download section -->
        <table
          role="presentation"
          valign="top"
          border="0"
          cellspacing="0"
          cellpadding="0"
          width="100%"
          style="margin: 40px 0"
        >
          <tbody>
            <tr>
              <td style="padding-bottom: 16px; text-align: center">
                <p style="margin: 2px 0; font-size: 14px">
                  Approveage is continuously growing and will add features for
                  home owners, investors, brokers and real estate agents.
                  Download today to get started.
                </p>
              </td>
            </tr>
            <!-- app links -->
            <tr>
              <td style="text-align: center">
                <a
                  href="https://approveage.com"
                  rel="noopener noreferrer"
                  style="display: inline-block; text-decoration: none"
                  target="_blank"
                >
                  <img
                    alt="App Store"
                    src="https://www.approveage.com/src/icons/buttons/appstore-btn.png"
                    style="outline: none; text-decoration: none"
                  />
                </a>
                <a
                  href="https://approveage.com"
                  rel="noopener noreferrer"
                  style="display: inline-block; text-decoration: none"
                  target="_blank"
                >
                  <img alt="Google Play"
                  src="https://www.approveage.com/src/icons/buttons/playstore-btn.png""
                  style=" outline: none; text-decoration: none" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- footer -->
        <footer>
          <p>
            We hope you enjoy using Approveage! <br />
            If you encounter any issues or have feedback to share, don't
            hesitate to reach out to our support team at
            <a href="mailto:support@approveage.com">support@approveage.com</a>
          </p>
          <p style="margin-top: 20px">
            Click here to <a href="/">unsubscribe</a> as real estate agent for
            this application.
          </p>
        </footer>
      </div>
    </div>
  </body>
</html>`,

  // attachments: [
  //   {
  //     filename: "logo.png",
  //     path: 'https://www.approveage.com/src/icons/download/title-logo.png',
  //     cid: "logo.png",
  //   },
  //   {
  //     filename: "playstore.png",
  //     path: 'https://www.approveage.com/src/icons/download/GooglePlay.png',
  //     cid: "playstore.png",
  //   },
  //   {
  //     filename: "app-store.png",
  //     path: 'https://www.approveage.com/src/icons/download/AppStore.png',
  //     cid: "app-store.png",
  //   }
  // ],
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