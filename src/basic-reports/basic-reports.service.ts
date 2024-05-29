import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BasicReportsService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findAll() {
    return this.prismaService.employees.findMany();
  }
}
