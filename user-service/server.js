const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'User Service is healthy' });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Samiksha', email: 'samiksha@example.com' },
  ]);
});

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Samiksha', email: 'samiksha@example.com' });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});