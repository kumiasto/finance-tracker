import express from 'express';
import router from './router';

const app = express();
app.use('/api', router);

// https://hendrixer.github.io/API-design-v4/lessons/routes-and-middleware/middleware
