// app/api/sendinquriy/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, company, website, productTitle, mobileNo } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Inquiry Bot" <${process.env.EMAIL_USER}>`,
    to: 'amusali989@gmail.com',
    subject: `New Product Inquiry: ${productTitle}`,
    text: `
A new inquiry has been submitted for the product:

📦 Product: ${productTitle}

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile No: ${mobileNo}
🏢 Company: ${company}
🌐 Website: ${website || 'N/A'}

Please follow up with the lead promptly.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error });
  }
}
