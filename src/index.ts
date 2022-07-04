import express from 'express';
import { config } from 'dotenv';
import { sendAmpEmail, sendHtmlEmail } from './mailer';
config();

const app = express();

app.get('/send', async (_req, res) => {
  const email = await sendAmpEmail('Sample AMP Email', 'shipment-tracking.html');

  res.send(`Mail sent, ${email.messageId}`);
});

app.get('/shop', async (_req, res) => {
  const email = await sendAmpEmail('Smart Shopping Cart Email with AMP', 'smart-cart.html');

  res.send(`Mail sent, ${email.messageId}`);
});

app.get('/survey', async (_req, res) => {
  const surveyEmail = await sendAmpEmail('Survey Form Email with AMP', 'survey.html');

  res.send(
    `Survey Email sent to: ${surveyEmail.envelope.to}. The message id is: ${surveyEmail.messageId}`
  );
});

app.get('/snd', async (_req, res) => {
  const email = await sendHtmlEmail(
    'Sample HTML Email',
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .try {
            color: red;
          }
        </style>
      </head>
      <body>
        <h1 class="try">Hellow Worls</h1>
        <button type="button" class="btn btn-primary">Primary</button>
      </body>
    </html>
`
  );
  res.send(`Mail sent, ${email.messageId}`);
});

app.listen(8080, () => {
  console.log('Server started');
});
