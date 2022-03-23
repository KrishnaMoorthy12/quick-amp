import express from 'express';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
import { readFile } from 'fs/promises';
import path from 'path';
config();

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
  const ampContent = await readFile(path.resolve(__dirname, 'ampContent.html'), {
    encoding: 'utf-8',
  });

  const email = await mailer.sendMail({
    to: 'akrishnamoorthy007@gmail.com',
    from: '"SMTP Test" <collegematewebapp@gmail.com>',
    subject: 'Testing HTML Emails with JS in SMTP',
    html: `AMP not supported`,
    amp: ampContent,
  });

  res.send(`Mail sent, ${email.messageId}`);
});

app.get('/shop', async (_req, res) => {
  const smartShop = await readFile(path.resolve(__dirname, 'smart-cart.html'), {
    encoding: 'utf-8',
  });

  const email = await mailer.sendMail({
    to: 'akrishnamoorthy007@gmail.com',
    from: '"SMTP Test" <collegematewebapp@gmail.com>',
    subject: 'Smart purchase email',
    html: `AMP not supported`,
    amp: smartShop,
  });

  res.send(`Mail sent, ${email.messageId}`);
});

app.listen(8080, () => {
  console.log('Server started');
});
