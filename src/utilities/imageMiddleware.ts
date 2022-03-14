import express from 'express';

const imageMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.query.filename) {
    next();
    return;
  }

  res.send('File name is required, exmaple filename=encenadaport');
};

export default imageMiddleware;
