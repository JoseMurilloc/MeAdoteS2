import nodemailer from 'nodemailer';
import configMail from '../config/mail';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';
import exphbs from 'express-handlebars';


type IRequestSendMail = {
  subject: string;
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


  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  async sendMail(
    {email, subject, html}: IRequestSendMail
  ) {

    await this.transporter.sendMail({
      from: '"Me Adote" <jooseemurillo@gmail.com>',
      to: email,
      subject,
      html
    })
  }

}

export default new Mail();
