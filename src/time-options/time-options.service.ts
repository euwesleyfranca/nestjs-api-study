import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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

  async create({ day, time }: { day: number; time: Date }) {
    day = Number(day);
    time = new Date(time);

    return this.prisma.timeOption.create({
      data: {
        day,
        time,
      },
    });
  }

  async update(id, { day, time }: { day: number; time: Date }) {
    day = Number(day);
    time = new Date(time);
    return await this.prisma.timeOption.update({
      where: {
        id,
      },
      data: {
        day,
        time,
      },
    });
  }

  async delete(id) {
    return await this.prisma.timeOption.delete({
      where: {
        id,
      },
    });
  }
}
