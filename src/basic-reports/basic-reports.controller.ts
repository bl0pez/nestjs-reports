import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Basic Reports')
@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return pdf file with hello world content',
  })
  public async generatePdf(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.generatePdf();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello World';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
