import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'leonardo@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @Length(8, 24)
  @ApiProperty({
    description: 'Nome do usuário. Entre 8 e 24 caracteres',
    example: 'Leonardo Tinoco',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Length(8, 16)
  @ApiProperty({
    description: 'Password',
    example: 'De 8 a 16 letras',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @Length(11)
  @ApiProperty({
    description: 'CPF (somente os dígitos, sem hifen etc)',
    example: '12312312300',
  })
  @IsNotEmpty()
  @IsInt()
  cpf: number;

  @ApiProperty({
    description: 'confirm pw',
    example: '??',
  })
  confirmPassword: string;
}
