import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import chatbotRouter from './api/chatbot.js';

const app = express(); 
app.use(cors());
app.use(bodyParser.json());

app.use('/', chatbotRouter);



app.get('/ping', (req, res) => {
  res.json({ message: 'Server is running' });
});




app.listen(8080, () => {
  console.log('listening on port 8080...');
});