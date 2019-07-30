import express from 'express';

const server = express();
const port = 3000;

server.route('/')
  .get((req, res) => {
    res.send('Welcome to Secret service!');
  })
  .post((req, res) => {
    res.send('Dummy post secret');
  });

server.route('/:secretId')
  .get((req, res) => {
    const { secretId } = req.params;
    res.send(`There should be secrete receiving page.\n Secret id: ${secretId}`);
  })
  .delete((req, res) => {
    const { secretId } = req.params;
    res.send(`There should be secrete removing page.\n Secret id: ${secretId}`);
  });

server.listen(port, () => console.log(`Secret server is running on port ${port}.`));
