import router from './routes/api/images';
import express from 'express';
import apicache from 'apicache';

const cache = apicache.middleware;

const app = express();

app.use(cache('5 minutes'));

app.use('/api/images', router);

app.listen(3000, () => {
  console.log(`logging into: http://localhost:3000`);
});


export default app;
