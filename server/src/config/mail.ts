import nodeMailer from 'nodemailer';

const configMail = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
      user: 'c811cff80f7820',
      pass: 'e29d164b53bf85'
  }
}

export default configMail;

