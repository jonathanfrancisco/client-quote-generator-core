import 'dotenv/config';
import express from 'express';
import appConfig from './appConfig';

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  });
});

app.listen(appConfig.PORT, () => {
  console.log(`server started listening on port:${appConfig.PORT}`);
});
