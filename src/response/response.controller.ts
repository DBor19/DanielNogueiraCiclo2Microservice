import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service'; // Importando o PrismaService

@Controller()
export class ResponseController {
  constructor(private readonly prismaService: PrismaService) {}

  @MessagePattern('process_request')
  async handleRequest(@Payload() data: any) {
    console.log('Mensagem recebida:', data);
    
    // Agora, chamando o método correto
    const corrida = await this.prismaService.createCorrida(data);
    return { message: 'Corrida registrada com sucesso!', corrida };
  }
}
