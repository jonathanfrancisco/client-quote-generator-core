import 'dotenv/config';
import express from 'express';

import pinoHttp from 'pino-http';
import pino from 'pino';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import appConfig from './appConfig';
import catchErrors from './utils/catchErrors';
import handleErrors from './utils/handleErrors';

import helloWorldHandler from './helloWorldHandler';
import handleRouteNotFound from './utils/handleRouteNotFound';
import sampleApiErrorHandler from './sampleApiErrorHandler';

const logger = pino();
const app = express();

app.use(pinoHttp());
app.use(bodyParser.json());
app.use(helmet());

app.get('/', catchErrors(helloWorldHandler));
app.get('/error', catchErrors(sampleApiErrorHandler));
app.all('*', handleRouteNotFound);
app.use(handleErrors);

app.listen(appConfig.PORT, () => {
  logger.info(`server started listening on port:${appConfig.PORT}`);
});
