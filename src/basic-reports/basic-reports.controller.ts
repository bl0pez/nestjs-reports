import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
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

  @Get('employment-letter')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return pdf file with employment letter content',
  })
  public async employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader(
      'Content-Disposition',
      'inline; filename=employment-letter.pdf',
    );
    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter/:employeeId')
  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'Return pdf file with employment letter content by employee id',
  })
  public async employmentLetterByID(
    @Res() response: Response,
    @Param('employeeId') employeeId: string,
  ) {
    const pdfDoc =
      await this.basicReportsService.employmentLetterById(+employeeId);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
