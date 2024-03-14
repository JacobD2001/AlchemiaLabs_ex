const app = require('./app'); 
const port = 3000;

// Start the server on port 3000 and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});