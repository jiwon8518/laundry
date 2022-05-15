import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/apis/category/entities/category.entity';

export class UpdateOrderInput {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  category?: Category;
}
