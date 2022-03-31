import { readFile } from 'fs/promises';
import { createTransport } from 'nodemailer';
import path from 'path';
import 'dotenv/config';

const { EMAIL, PASSWORD } = process.env;

const mailer = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

export async function sendAmpEmail(subject: string, ampFilePath: string) {
  const ampContent = await readFile(path.resolve(__dirname, ampFilePath), {
    encoding: 'utf-8',
  });

  const email = await mailer.sendMail({
    to: 'akrishnamoorthy007@gmail.com',
    from: '"SMTP Test" <collegematewebapp@gmail.com>',
    subject,
    html: `AMP not supported`,
    amp: ampContent,
  });

  return email;
}
