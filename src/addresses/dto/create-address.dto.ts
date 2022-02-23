import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsNumberString()
  personId: number;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsInt()
  number?: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsNotEmpty()
  @IsString()
  district: string;
  city: string;
  state: string;
  country: string;

  @IsString()
  @IsPostalCode('BR')
  zipCode: string;
}
