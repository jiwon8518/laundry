import { IsNotEmpty } from 'class-validator';

export class CreateCategoryInput {
  @IsNotEmpty()
  name: string;
}
