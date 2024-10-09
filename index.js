const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());



app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend test api!' });
});

// Serve React App
if (process.env.NODE_ENV === 'production') {
  // Adjust the path to your build folder
  app.use(express.static(path.join(__dirname, 'build'))); // Assuming build is at the root level

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
