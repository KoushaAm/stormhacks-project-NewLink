import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import chatbotRouter from './api/chatbot.js';
import accountRouter from './api/accounts.js'; 

const app = express(); 

mongoose.connect('mongodb://localhost:27017/newlink')
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use('/chatbot', chatbotRouter);
app.use('/accounts', accountRouter);

app.get('/ping', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(8080, () => {
  console.log('listening on port 8080...');
});