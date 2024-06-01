import { Injectable, NotFoundException } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  getEmploymentLetterByIdReport,
  getHelloWorldReport,
} from 'src/reports';
import { getEmploymentLetterReport } from 'src/reports/employment-letter.report';

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

  public employmentLetter() {
    const doc = this.printerService.createPdf({
      docDefinitions: getEmploymentLetterReport(),
    });

    return doc;
  }

  public async employmentLetterById(employeeId: number) {
    const employee = await this.prismaService.employees.findUnique({
      where: {
        id: employeeId,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const doc = this.printerService.createPdf({
      docDefinitions: getEmploymentLetterByIdReport({
        employerName: 'John Doe',
        employerPosition: 'CEO',
        employeeName: employee.name,
        employeePosition: employee.position,
        employeeStartDate: employee.start_date,
        employeeHours: employee.hours_per_day,
        employeeWorkSchedule: employee.work_schedule,
        employerCompany: 'Tucan Code Corp.',
      }),
    });

    return doc;
  }
}
