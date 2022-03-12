import express  from "express";

const imageMiddleware = (req: express.Request, res: express.Response, next : Function) => {
    if (req.query.filename) {
         next();
         return;
    }

    res.send('File name is required');

}


export default imageMiddleware;