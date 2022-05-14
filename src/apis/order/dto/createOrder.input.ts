import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/apis/category/entities/category.entity';

export class CreateOrderInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: Category;
}
