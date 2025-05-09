const express = require('express');
const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('Hello from the web service!');
});

app.listen(PORT, () => {
  console.log(`Web service running on http://localhost:${PORT}`);
});