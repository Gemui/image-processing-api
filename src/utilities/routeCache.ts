import NodeCache from "node-cache";
import express  from "express";
const cache = new NodeCache();

const nodeCacheMiddleware =  (req: express.Request, res: express.Response, next : Function) => {
    const cacheKey  = req.originalUrl;
    const cachedResponse = cache.get(cacheKey);
    console.log(cachedResponse)
    if (cachedResponse) {
        return res.send(cachedResponse);
    }
    // res.set('originalSend',res.send)
    // res.originalSend = res.send;
    // res.send = body => {

    // }
    console.log('cache not found',cacheKey);

    next();
}

export default nodeCacheMiddleware;