import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, phone, company, message } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Tech Fresco" <noreply@techfresco.com>', // Sender address
      to: "noreply@techfresco.com", // Change to your recipient's email
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Tech Fresco" <noreply@techfresco.com>', // Sender address
      to: email, // Client's email
      subject: "Thank You for Reaching Out to Tech Fresco",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
  <thead>
    <tr>
      <td>
        <img style="width: 100%" src="https://techfresco.com/images/email_header.png" />
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 40px">
        <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${name},</h2>
        <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for contacting Tech Fresco!</p>

        <p style="text-align: left; font-size: 16px;color:#202020;">We've received your request and are reviewing the details. Our team is dedicated to providing you with the best possible IT solution and will contact you shortly to discuss your company's IT needs.
        </p>
        <p style="text-align: left; font-size: 16px;color:#202020;">
          In the meantime, if you have any additional questions or require immediate assistance, please don't hesitate to contact us at <a href="mailto:info@techfresco.com" style="color: #EE342A;text-decoration: none;">info@techfresco.com</a>.
        </p>
        <p style="text-align: left; font-size: 16px;color:#202020;">
          We look forward to helping you with your IT challenges and supporting you.
        </p>
        <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>The Tech Fresco Team</h2>
      </td>
    </tr>
  </tbody>
  <tfoot >
				<td style="padding: 24px 40px;background: #222222;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
					Thanks for using <a href="https://techfresco.com/" style="color: #EE342A;font-size: 20px;text-decoration: none;">Tech Fresco</a>
				</td>
			  </tfoot>
</table>
      `,
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsRecipient);
    // Send email to the client
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
