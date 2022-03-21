import express from 'express';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
config();

import { ampContent } from './ampContent.html';

const app = express();

const { EMAIL, PASSWORD } = process.env;

const mailer = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

app.get('/send', async (_req, res) => {
  const email = await mailer.sendMail({
    to: 'akrishnamoorthy007@gmail.com',
    from: '"SMTP Test" <collegematewebapp@gmail.com>',
    subject: 'Testing HTML Emails with JS in SMTP',
    html: `AMP not supported`,
    amp: ampContent,
  });

  res.send(`Mail sent, ${email.messageId}`);
});

app.listen(8080, () => {
  console.log('Server started');
});
