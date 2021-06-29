import nodemailer from 'nodemailer';
import configMail from '../config/mail';

type IRequestSendMail = {
  subject: string;
  text: string;
  html: string;
  email: string;
}

class Mail {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: configMail.host,
      port: configMail.port,
      secure: false,
      auth: {
        user: configMail.auth.user,
        pass: configMail.auth.pass,
      },
    });
  }

  async sendMail(
    {email, subject, text, html}: IRequestSendMail
  ) {
    await this.transporter.sendMail({
      from: '"Me Adote 🐕" <jooseemurillo@gmail.com>',
      to: email,
      subject,
      text,
      html,
    });
  }

}

export default new Mail();
