import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/apis/category/entities/category.entity';

export class CreateOrderInput {
  @IsNotEmpty()
  @ApiProperty({ description: '이름' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: '카테고리ID' })
  category: Category;
}
