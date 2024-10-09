const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());



app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend test api!' });
});

app.use(express.static("./frontend/build"));
app.get("*",(req, res)=>{
  res.sendFile(path.join(__dirname,"frontend","build","index.html"))
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
