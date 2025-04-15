// src/auth/dto/register.dto.ts
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { UserRole } from 'src/users/enums/user-role.enum';

export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
