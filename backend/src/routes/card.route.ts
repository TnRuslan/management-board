import cardController from '@/controllers/card.controller';
import { cardSchema } from '@/lib/validation/card.schema';
import { tryCatchWrapper } from '@/middleware/tryCatch.middleware';
import { validateBody } from '@/middleware/validtion.middleware';
import { Router } from 'express';

const cardRouter: Router = Router();

cardRouter.get('/', () => {});

cardRouter.get(
  '/:id',
  tryCatchWrapper(cardController.getCard.bind(cardController)),
);

cardRouter.post(
  '/',
  validateBody(cardSchema),
  tryCatchWrapper(cardController.addCard.bind(cardController)),
);

cardRouter.patch(
  '/:id',
  validateBody(cardSchema),
  tryCatchWrapper(cardController.updateCard.bind(cardController)),
);

cardRouter.delete(
  '/:id',
  tryCatchWrapper(cardController.deleteCard.bind(cardController)),
);

export default cardRouter;
