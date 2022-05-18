import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryInput {
  @IsNotEmpty()
  @ApiProperty({ description: '이름' })
  name: string;
}
