import router from './routes/api/images'
import express  from "express";
import apicache from 'apicache'

let cache = apicache.middleware

const app = express();

app.use(cache('5 minutes'))

app.listen(3000, () => {
    console.log(`logging into: http://localhost:3000`)
});

app.use('/api/images', router);


export default app;
