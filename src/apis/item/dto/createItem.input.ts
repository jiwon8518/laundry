import { IsNotEmpty } from 'class-validator';

export class CreateItemInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  order: number;
}
