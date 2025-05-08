// app/api/send-inquiry/route.ts (for Next.js 13+ with app directory)

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, company, website, product,mobileNo } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,      // your Gmail address
      pass: process.env.EMAIL_PASS,      // App password (not your Gmail password)
    },
  });

  const mailOptions = {
  
    to: 'amusali989@gmail.com', // your client's email
    subject: `New Product Inquiry: `,
    text: `
      A new inquiry has been submitted for the product:${product.title}

      Name: ${name}
      Email: ${email}
      Company: ${company}
      Website: ${website}
      Mobile No: ${mobileNo}
      
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
