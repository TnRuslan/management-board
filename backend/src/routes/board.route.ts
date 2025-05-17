import boardController from '@/controllers/board.controller';
import { boardSchema } from '@/lib/validation/board.schema';
import { tryCatchWrapper } from '@/middleware/tryCatch.middleware';
import { validateBody } from '@/middleware/validtion.middleware';
import { Router } from 'express';

const boardRouter: Router = Router();

boardRouter.get('/', () => {});

boardRouter.get(
  '/:id',
  tryCatchWrapper(boardController.getBoard.bind(boardController)),
);

boardRouter.post(
  '/',
  validateBody(boardSchema),
  tryCatchWrapper(boardController.addBoard.bind(boardController)),
);

boardRouter.patch(
  '/:id',
  validateBody(boardSchema),
  tryCatchWrapper(boardController.updateBoard.bind(boardController)),
);

boardRouter.delete(
  '/:id',
  tryCatchWrapper(boardController.deleteBoard.bind(boardController)),
);

export default boardRouter;
