const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const welcomeImage = fs.readFileSync(path.join(__dirname, "logo.png"));

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "Outlook365",
  tls: { ciphers: "SSLv3" },
  host: "approveage.com",
  secure: false,
  port: 587,
  auth: {
    user: "ash@approveage.com",
    pass: "******",
  },
  debug: true,
  logger: true,
});

// Define the email options
const mailOptions = {
  from: "ash@approveage.com",
  to: "talk2sayem@gmail.com", // Recipient's email address
  subject: "Test Email",
  html: `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      *,
      body {
        font-family: "Poppins", "Courier New", Courier, monospace;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        width: 100%;
        max-width: 550px;
        padding: 1rem;
        margin: 0 auto;
      }

      header {
        display: flex;
        gap: 0.5rem;
        color: #495057;
        align-items: center;
        justify-content: center;
        margin-bottom: 4rem;
      }

      p {
        color: #334155;
        line-height: 28px;
        font-weight: 400;
      }

      a.learn {
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }

      a {
        color: #6a8a2a;
        text-decoration: none;
      }

      .download {
        margin-bottom: 4rem;
      }

      .download h3 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
        font-size: 1rem;
      }

      .download .links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .links a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 1.5px solid #334155;
        color: #334155;
        border-radius: 10px;
        padding: 0.6rem 1rem;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <header>
    <img src="cid:logo.png" alt="logo" />
        <h1 style="font-size: 1.5rem">Approveage</h1>
      </header>
      <main>
        <p>
          Hello [Name], <br />
          You've been invited to streamline your mortgage journey with
          Approveage, making the process easier for you. Join
          <a href="">Jane Doe</a> and others who have successfully navigated
          their mortgages using our app.
          <a class="learn" href="https://www.approveage.com">Learn more</a>
        </p>
        <div class="download" style="margin-bottom: 4rem">
          <h3>Download today for access to helpful tools and resources.</h3>
          <div class="links">
            <a href="#" target="_blank">
             <img src="cid:app-store.png" alt="logo" />
              <span>App Store</span>
            </a>
            <a href="#" target="_blank">
             <img src="cid:playstore.png" alt="logo" />
              <span>Play Store</span>
            </a>
          </div>
        </div>
        <div class="salutation">
          <p>
            See you on<br />
            Approveage, <br />
            Approaveage Team
          </p>
        </div>
      </main>
      <footer style="margin-top: 4rem; font-size: 0.8rem">
        <p>
          We hope you enjoy using Approveage! <br />
          If you encounter any issues or have feedback to share, don't hesitate
          to reach out to our support team at
          <a href="mailto:support@approveage.com">support@approveage.com</a>.
        </p>
      </footer>
    </div>
  </body>
</html>

  `,
  attachments: [
    {
      filename: "logo.png",
      path: "./logo.png",
      cid: "logo.png",
    },
    {
      filename: "playstore.png",
      path: "./playstore.png",
      cid: "playstore.png",
    },
    {
      filename: "app-store.png",
      path: "./app-store.png",
      cid: "app-store.png",
    },
  ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  console.log("11111");
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }

  // Close the transporter
  transporter.close();
});
