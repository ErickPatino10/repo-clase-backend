import express from 'express';
import { main, Producto } from "./database.js";

const app = express();
const port = 3000;

app.use(express.json());

app.post('/prodcuto', async (req, res) => {
  try {
    const newProduct = new Producto(req.body);
    await newProduct.save();
    res.status(201).json({ msg: "New prodcut registred" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

main().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
