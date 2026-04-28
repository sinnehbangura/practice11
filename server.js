const express = require('express');
const app = express();

// Let Express read JSON data from requests
app.use(express.json());

// GET route from Practice 9
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your very first API!' });
});

// POST route from Practice 10
app.post('/api/notes', (req, res) => {
  const { name, note } = req.body;

  if (!name || !note) {
    return res.status(400).json({ error: 'Both name and note are required.' });
  }

  res.status(201).json({
    message: 'Note received!',
    data: { name, note }
  });
});

console.log('POST route is loaded');
app.get('/', (req, res) => {
  res.send('My app is running');
});
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});