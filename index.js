import fetch from "node-fetch";

import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
  res.send('start')
})

app.get('/get', (req, res)=>{
  res.send('get')
})

app.listen(process.env.PORT || 3000);
