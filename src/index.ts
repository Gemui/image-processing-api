import router from './routes/index'
import express  from "express";
import path from 'path';
import compression from 'compression'
import apicache from 'apicache'

let cache = apicache.middleware

const app = express();

app.use(cache('5 minutes'))
// const ExpressCache = require('express-cache-middleware')
// const cacheManager = require('cache-manager')
// import compression from 'compression'

// const cacheMiddleware = new ExpressCache(
//     cacheManager.caching({
//         store: 'memory', max: 10000, ttl: 3600
//     })
// )
// cacheMiddleware.attach(app)

// app.use(compression())
app.use('/', router);


app.listen(3000, () => {
    console.log(`logging into: http://localhost:3000`)
});




// console.log(path.resolve('./assets/images/full/encenadaport.png'));
