import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BasicReportsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
