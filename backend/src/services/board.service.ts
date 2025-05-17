import { prisma } from '@/lib/prisma';
import { Board } from '@prisma/client';

export default class BoardService {
  async getBoardById(id: string): Promise<Board | null> {
    const board = await prisma.board.findUnique({ where: { id } });
    return board;
  }

  async createBoard(body: { name: string }): Promise<Board> {
    const newBoard = await prisma.board.create({ data: body });
    return newBoard;
  }

  async updateBoard(id: string, body: { name: string }): Promise<Board> {
    const updatedBoard = await prisma.board.update({
      where: { id },
      data: body,
    });
    return updatedBoard;
  }

  async deleteBoard(id: string): Promise<void> {
    await prisma.board.delete({ where: { id } });
  }
}
