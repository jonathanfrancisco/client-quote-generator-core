import express from 'express';

const app = express();

const serverPort = 3000;

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  });
});

app.listen(serverPort, () => {
  console.log(`server started listening on port:${serverPort}`);
});
