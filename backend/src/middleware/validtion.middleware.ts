
import { StatusCodes } from '@/const/statusCodes';
import type { NextFunction, Request, RequestHandler, Response } from 'express';
import type { ObjectSchema } from 'joi';

export const validateBody = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void | Response => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res
        .status(StatusCodes.BadRequest)
        .json({ error: error.details[0].message });
    }

    next();
  };
};
