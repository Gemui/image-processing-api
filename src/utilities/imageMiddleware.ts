import express from 'express';

const imageMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (req.query.filename) {
    next();
    return;
  }

  res.send('File name is required, exmaple ?filename=encenadaport.jpg');
};

export default imageMiddleware;
