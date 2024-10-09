const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world !');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend test api!' });
});

// Serve React App
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build'))); // Adjust 'client/build' to your actual build folder

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
