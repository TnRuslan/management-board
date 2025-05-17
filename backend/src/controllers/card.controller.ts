import { StatusCodes } from '@/const/statusCodes';
import CardService from '@/services/card.service';
import type { Request, Response } from 'express';

class CardController {
  constructor(private cardService: CardService) {}

  async getCard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const card = await this.cardService.getCardById(id);

    res.status(StatusCodes.OK).json(card);
  }

  async addCard(req: Request, res: Response): Promise<void> {
    const newCard = await this.cardService.createCard(req.body);

    res.status(StatusCodes.Created).json(newCard);
  }

  async updateCard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedCard = await this.cardService.updateCard(id, req.body);

    res.status(StatusCodes.OK).json(updatedCard);
  }

  async deleteCard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.cardService.deleteCard(id);

    res.status(StatusCodes.OK).send('success!');
  }
}

const cardService = new CardService();

const cardController = new CardController(cardService);

export default cardController;
