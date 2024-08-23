import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      name,
      email,
      phone,
      company,
      message,
      industry,
      challenges,
      service,
    } = bodyJSON;

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
      subject: "Order Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nCompany: ${company}\nIndustry: ${industry}\nChallenges: ${challenges}\nMessage: ${message}`,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Tech Fresco" <noreply@techfresco.com>', // Sender address
      to: email, // Client's email
      subject: `Tech Fresco: ${service} Request Received`,
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
        <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for submitting your request for ${service} with Tech Fresco.</p>

        <p style="text-align: left; font-size: 16px;color:#202020;">We have received your request and the details you provided. Our team is currently reviewing your submission and will reach out shortly to discuss your needs and provide a tailored solution.
        </p>
        <p style="text-align: left; font-size: 16px;color:#202020;">
          If you have any immediate questions or additional information to share, please feel free to contact us at <a href="mailto:info@techfresco.com" style="color: #EE342A;text-decoration: none;">info@techfresco.com</a>.
        </p>
        <p style="text-align: left; font-size: 16px;color:#202020;">
          Thank you for choosing Tech Fresco. We look forward to assisting you!
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
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}
