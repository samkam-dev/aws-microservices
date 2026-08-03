const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Product Service is healthy' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 25000 }
  ]);
});

app.get('/products/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Laptop', price: 55000 });
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});