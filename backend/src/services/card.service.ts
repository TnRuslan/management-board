import { prisma } from '@/lib/prisma';
import { Card } from '@prisma/client';

export default class CardService {
  async getCardById(id: string): Promise<Card | null> {
    const card = await prisma.card.findUnique({ where: { id } });
    return card;
  }

  async createCard(
    body: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Card> {
    const newCard = await prisma.card.create({ data: body });
    return newCard;
  }

  async updateCard(id: string, body: Partial<Card>): Promise<Card> {
    const updatedCard = await prisma.card.update({
      where: { id },
      data: body,
    });
    return updatedCard;
  }

  async deleteCard(id: string): Promise<void> {
    await prisma.card.delete({ where: { id } });
  }
}
