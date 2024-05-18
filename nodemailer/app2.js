const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: "Outlook365",
    tls: { ciphers: 'SSLv3' },
  host: 'smtp-mail.outlook.com',
    secure: false,
    port: 587,
    auth: {
        user: "yourmail@gmail.com",
        pass: "*****"
    },
    debug: true,
    logger: true,
});

// Define the email options
const mailOptions = {
    from: 'yourmail@gmail.com',
    to: 'talk2sayem@gmail.com', // Recipient's email address
    subject: 'Test Email from nodemailer',
  html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div
      style="
        font-family: 'Open Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        font-size: 16px;
        color: #2c3e50;
        line-height: 150%;
        letter-spacing: normal;
      "
    >
      <div
        style="
          max-width: 800px;
          margin: auto;
          padding: 15px;
        "
      >
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
          You've been invited to streamline your mortgage journey with
          Approveage, making the process easier for you. Join
          <a style="color: #6a8a2a; text-decoration: none" href="">Jane Doe</a>
          and others who have successfully navigated their mortgages using our
          app.
          <a
            style="
              text-decoration: underline;
              text-underline-offset: 0.2rem;
              color: #6a8a2a;
            "
            href="https://www.approveage.com"
            >Learn more</a
          >
        </p>
        <!-- download section -->
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
                <h2
                  style="
                    margin: 2px 0;
                    font-weight: 500;
                    font-size: 16px;
                    color: #114951;
                  "
                >
                  Download today for access to helpful tools and resources.
                </h2>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a
                  href="#"
                  rel="noopener noreferrer"
                  style="
                    color: #0a66c2;
                    display: inline-block;
                    text-decoration: none;
                  "
                  target="_blank"
                >
                  <img
                    alt="App Store"
                    src="https://www.approveage.com/src/icons/download/AppStore.png"
                    style="
                      outline: none;
                      text-decoration: none;
                      height: 50px;
                      width: 160px;
                    "
                    width="120"
                    height="40"
                  />
                </a>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  style="
                    color: #0a66c2;
                    display: inline-block;
                    text-decoration: none;
                  "
                  target="_blank"
                >
                  <img
                    alt="Google Play"
                    src="https://www.approveage.com/src/icons/download/GooglePlay.png"
                    style="
                      outline: none;
                      text-decoration: none;
                      height: 50px;
                      width: 160px;
                    "
                    width="134"
                    height="40"
                  />
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
                <p style="color: #334155; line-height: 28px; font-weight: 400">
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
</html>
`,
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