import { IsNotEmpty } from 'class-validator';
import { Order } from 'src/apis/order/entities/order.entity';

export class UpdateItemInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  order: Order;
}
