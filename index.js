import fetch from "node-fetch";

import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
  fetch('https://ce9m9maa.shop/').then(resp=>resp.text()).then(data=>res.send(data))
})

app.get('/get', (req, res)=>{
  res.send('get')
})

app.listen(process.env.PORT || 3000);
