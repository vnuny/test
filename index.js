import fetch from "node-fetch";

import express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const queryParams = new URLSearchParams({
    a: 1,
    // Add more parameters if needed
  });

  const url = `https://ce9m9maa.shop/?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/get', (req, res)=>{
  res.send('get')
})

app.listen(process.env.PORT || 3000);
