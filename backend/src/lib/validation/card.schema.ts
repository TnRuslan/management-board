import { CardStatus } from '@/types/card.type';
import Joi from 'joi';

const maxTitleLength = 150;
const maxDescriptionLength = 400;

export const cardSchema = Joi.object({
  title: Joi.string().trim().max(maxTitleLength).required(),
  description: Joi.string().trim().max(maxDescriptionLength).required(),
  status: Joi.string()
    .valid(...Object.values(CardStatus))
    .required(),
  position: Joi.number().integer().min(0).required(),
  boardId: Joi.string().required(),
});
