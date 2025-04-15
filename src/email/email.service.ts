// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // set in .env
      pass: process.env.EMAIL_PASS,
    },
  });

  async sendInvitationEmail(to: string, inviteLink: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'You are invited to join Muscle Bloom',
      html: `<p>You have been invited to register on Muscle Bloom.</p>
             <p>Click here to register: <a href="${inviteLink}">${inviteLink}</a></p>`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
