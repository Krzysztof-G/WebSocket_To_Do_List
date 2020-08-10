const express = require('express');
// const path = require('path');

const app = express();


// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '/client/')));

// Show index.html as main page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/index.html'));
// });

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
  }); 