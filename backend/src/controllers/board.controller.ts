import { StatusCodes } from '@/const/statusCodes';
import BoardService from '@/services/board.service';
import type { Request, Response } from 'express';

class BoardController {
  constructor(private boardService: BoardService) {}

  async getBoard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const board = await this.boardService.getBoardById(id);

    res.status(StatusCodes.OK).json(board);
  }

  async addBoard(req: Request, res: Response): Promise<void> {
    const newBoard = await this.boardService.createBoard(req.body);

    res.status(StatusCodes.Created).json(newBoard);
  }

  async updateBoard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedBoard = await this.boardService.updateBoard(id, req.body);

    res.status(StatusCodes.OK).json(updatedBoard);
  }

  async deleteBoard(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.boardService.deleteBoard(id);

    res.status(StatusCodes.OK).send('success!');
  }
}

const boardService = new BoardService();

const boardController = new BoardController(boardService);

export default boardController;
