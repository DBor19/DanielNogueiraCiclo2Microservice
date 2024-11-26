import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // Você pode adicionar métodos customizados, caso precise
  async createCorrida(data: Prisma.CorridaCreateInput) {
    return this.corrida.create({
      data,
    });
  }
}
