import { Controller, Get, HttpStatus } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Basic Reports')
@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all employees',
  })
  public async findAll() {
    return this.basicReportsService.findAll();
  }
}
