import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TimeOptionsService } from './time-options.service';

@Controller('time-options')
export class TimeOptionsController {
  constructor(private readonly timeOptionsService: TimeOptionsService) {}

  @Get()
  async getAll() {
    return this.timeOptionsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.timeOptionsService.getById(+id);
  }

  @Post()
  async create(@Body() data) {
    return this.timeOptionsService.create(data);
  }

  @Put(':id')
  async update(@Body() data, @Param('id') id: number) {
    return this.timeOptionsService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.timeOptionsService.delete(+id);
  }
}
