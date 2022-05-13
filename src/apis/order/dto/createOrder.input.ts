import { IsNotEmpty } from 'class-validator';

export class CreateOrderInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: number;
}
