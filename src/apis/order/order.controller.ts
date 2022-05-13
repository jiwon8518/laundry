import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderInput } from './dto/createOrder.input';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  private logger = new Logger('OrderController');
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createOrder(
    @Body() createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    this.logger.verbose(`creating a new order
    Payload: ${JSON.stringify(createOrderInput)}`);
    return await this.orderService.createOrder({ createOrderInput });
  }
}
