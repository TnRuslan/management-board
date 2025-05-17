import { Application } from 'express';
import boardRouter from './board.route';
import cardRouter from './card.route';

class AppRouter {
  constructor(private app: Application) {}

  init(): void {
    this.app.use('/api/boards', boardRouter);
    this.app.use('/api/cards', cardRouter);
  }
}

export default AppRouter;
