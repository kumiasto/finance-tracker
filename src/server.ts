import express from 'express';
import router from './router';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

// https://hendrixer.github.io/API-design-v4/lessons/routes-and-middleware/middleware
