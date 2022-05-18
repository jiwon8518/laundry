import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Order } from 'src/apis/order/entities/order.entity';

export class CreateItemInput {
  @IsNotEmpty()
  @ApiProperty({ description: '이름' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: '주문ID' })
  order: Order;
}
