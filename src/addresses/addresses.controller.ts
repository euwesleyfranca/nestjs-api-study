import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressesService.create(createAddressDto);
  }

  @Get()
  async findAll() {
    return await this.addressesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.addressesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.addressesService.delete(+id);
  }
}
