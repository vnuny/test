import express from "express";
import axios from "axios";

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios('https://ce9m9maa.shop/');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
