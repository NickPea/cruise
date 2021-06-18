//\\

import { config } from './config';
import { router } from './router';

import express from 'express';
const app = express();

app.use(router);

app.listen(config.PORT, () => {console.log(`listening on port: ${config.PORT}`);});