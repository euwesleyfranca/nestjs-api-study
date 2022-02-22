import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TimeOptionsController } from './time-options.controller';
import { TimeOptionsService } from './time-options.service';

@Module({
  imports: [PrismaModule],
  controllers: [TimeOptionsController],
  providers: [TimeOptionsService],
})
export class TimeOptionsModule {}
