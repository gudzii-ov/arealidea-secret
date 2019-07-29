import express from 'express';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.send('Welcome to Secret service');
});

server.listen(port, () => console.log(`Secret server is running on port ${port}`))
