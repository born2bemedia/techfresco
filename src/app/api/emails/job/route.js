import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const {
      name,
      email,
      phone,
      portfolio,
      expertise,
      experience,
      technologies,
      certifications,
      project,
      industryTrends,
      motivation,
      availability,
      workPreference,
      comments,
      cv,
    } = requestBody;

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

    const attachments = [];

    if (cv) {
      attachments.push({
        filename: cv.filename, // Use the actual filename from the client
        content: cv.base64, // Base64 encoded data
        encoding: "base64",
      });
    }

    // Set up email data for the recipient
    const mailOptionsRecipient = {
      from: '"Tech Fresco" <noreply@techfresco.com>', // Sender address
      to: "noreply@techfresco.com", // Change to your recipient's email
      subject: "Job Application Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Portfolio: ${portfolio}
        Area of Expertise: ${expertise}
        Years of Experience: ${experience}
        Technologies/Tools: ${technologies}
        Certifications: ${certifications}
        Project: ${project}
        Industry Trends: ${industryTrends}
        Motivation: ${motivation}
        Availability: ${availability}
        Work Preference: ${workPreference}
        Additional Comments: ${comments}
      `,
      attachments: attachments,
    };

    // Set up email data for the client
    const mailOptionsClient = {
      from: '"Tech Fresco" <noreply@techfresco.com>', // Sender address
      to: email, // Client's email
      subject: "Tech Fresco Job Application Received",
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
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for applying for a position at Tech Fresco.</p>

                <p style="text-align: left; font-size: 16px;color:#202020;">We have received your job application and will review it shortly. Our team will carefully consider your qualifications and experience. You can expect to hear from us with a decision within 2 business days.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                  If you have any additional questions or need further information, feel free to reply to this email.
                </p>
                <p style="text-align: left; font-size: 16px;color:#202020;">
                  Thank you for your interest in joining Tech Fresco. We appreciate your time and effort in applying.
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
