// src/organizations/dto/create-organization.dto.ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrganizationDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsEmail()
  email: string;
}
