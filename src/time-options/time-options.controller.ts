import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTimeOptionDto } from './dto/create-time-options.dto';
import { TimeOptionsService } from './time-options.service';

@Controller('time-options')
export class TimeOptionsController {
  constructor(private readonly timeOptionsService: TimeOptionsService) {}

  //@UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return this.timeOptionsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.timeOptionsService.getById(+id);
  }

  @Post()
  async create(@Body() data: CreateTimeOptionDto) {
    return this.timeOptionsService.create(data);
  }

  @Put(':id')
  async update(@Body() data, @Param('id', ParseIntPipe) id: number) {
    return this.timeOptionsService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.timeOptionsService.delete(+id);
  }
}
