import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const {
      street,
      district,
      number,
      complement,
      city,
      state,
      country,
      zipCode,
      personId,
    } = createAddressDto;

    const { id } = await this.prismaService.user.findUnique({
      where: {
        id: personId,
      },
    });

    if (!id) {
      throw new BadRequestException('User not found.');
    }

    return this.prismaService.addresses.create({
      data: {
        personId: id,
        street,
        number,
        complement,
        district,
        city,
        state,
        country,
        zipCode,
      },
    });
  }

  async findAll() {
    return await this.prismaService.addresses.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.addresses.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async delete(id: number) {
    return `This action removes a #${id} address`;
  }
}
