import { Request, Response, NextFunction } from 'express';

export default (
  request: Request,
  response: Response,
  next: NextFunction,
): NextFunction | void => {
  console.log(`${request.method} at ${request.url}`);
  return next();
};
