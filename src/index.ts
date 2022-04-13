import express from 'express';
import { config } from 'dotenv';
import { sendAmpEmail } from './mailer';
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

app.listen(8080, () => {
  console.log('Server started');
});
