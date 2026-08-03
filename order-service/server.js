const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Order Service is healthy' });
});

app.get('/orders', (req, res) => {
  res.json([
    { id: 101, userId: 1, productId: 1, status: 'Delivered' },
    { id: 102, userId: 2, productId: 2, status: 'Pending' }
  ]);
});

app.get('/orders/:id', (req, res) => {
  res.json({ id: req.params.id, userId: 1, productId: 1, status: 'Delivered' });
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});