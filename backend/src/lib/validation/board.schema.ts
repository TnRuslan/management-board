import Joi from 'joi';

const maxNameLength = 100;

export const boardSchema = Joi.object({
  name: Joi.string().trim().max(maxNameLength).required(),
});
