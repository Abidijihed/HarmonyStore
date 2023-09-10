
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider
  port: 587,
  host: 'https://www.harmonystore01.com/',
  secure: false,
  auth: {
    user: "abidij55@gmail.com",
    pass: "acktjzylhezfsvhf"
  },
  tls: {
    rejectUnauthorized: false,
  }
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error, 'ttt');
  } else {
    console.log("Server is ready to take our Messages");
  }
});


async function nodmail(req, res) {
  const { firstName, email, subject, message } = req.body;

  try {
    // Define the HTML content for the email body
    const htmlContent = `
      <html>
        <head>
          <h1>Harmony Store</h1>
        </head>
        <body>
          <h3>Contact Information</h3>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h2>Message</h2>
          <p>${message}</p>
        </body>
      </html>
    `;

    const mailOptions = {
      from: email,
      to: "abidij55@gmail.com", // Replace with the recipient's email address
      subject: subject,
      html: htmlContent, // Use HTML content for the email body
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.json({ status: "success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "fail", error: error.message });
  }
}

module.exports={
  nodmail
}