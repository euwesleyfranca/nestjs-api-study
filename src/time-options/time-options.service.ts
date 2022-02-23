import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeOptionDto } from './dto/create-time-options.dto';

@Injectable()
export class TimeOptionsService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll() {
    return this.prisma.timeOption.findMany();
  }

  async getById(id) {
    return this.prisma.timeOption.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: CreateTimeOptionDto) {
    const { day, time } = data;

    return this.prisma.timeOption.create({
      data: {
        day: day,
        time: time,
      },
    });
  }

  async update(id, { day, time }: { day: number; time: Date }) {
    const dataTimeOption = {} as Prisma.TimeOptionUpdateInput;

    if (day) {
      dataTimeOption.day = +day;
    }

    if (time) {
      dataTimeOption.time = new Date(time);
    }

    return await this.prisma.timeOption.update({
      where: {
        id,
      },
      data: dataTimeOption,
    });
  }

  async delete(id) {
    if (isNaN(id)) {
      throw new BadRequestException('Id is required');
    }
    const timeOption = await this.getById(id);

    if (!timeOption) {
      throw new BadRequestException('Time option not found');
    }
    return await this.prisma.timeOption.delete({
      where: {
        id,
      },
    });
  }
}
