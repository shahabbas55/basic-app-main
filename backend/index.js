const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world !');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch all other requests and serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'D:/New folder/basic-app-main/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
