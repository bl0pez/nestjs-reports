import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly printerService: PrinterService,
  ) {}

  public async findAll() {
    return this.prismaService.employees.findMany();
  }

  public generatePdf() {
    const doc = this.printerService.createPdf({
      docDefinitions: getHelloWorldReport(),
    });

    return doc;
  }
}
