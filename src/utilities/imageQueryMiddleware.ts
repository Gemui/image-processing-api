import express from 'express';

const imageQueryMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  if (req.query.width && req.query.height) {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    if (isNaN(width) || width < 1 || isNaN(height) || height < 1) {
      res.send(
        'Invalid input for height or width e.g. height=a, height=0 or height=-1.'
      );
      return;
    }
  }

  if (req.query.rotate) {
    const rotate = Number(req.query.rotate);
    if (isNaN(rotate) || rotate < 0) {
      res.send(
        'Invalid input for rotate e.g. rotate=a, rotate=0 or rotate=-1.'
      );
      return;
    }
  }

  next();
};

export default imageQueryMiddleware;
