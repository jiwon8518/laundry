import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderInput } from './dto/createOrder.input';
import { UpdateOrderInput } from './dto/updateOrder.input';
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

  @Get('/:category')
  async fetchOrder(@Param('category') category: number) {
    this.logger.verbose(`CategoryId ${category} trying to find all orders`);
    return await this.orderService.findAll({ category });
  }

  @Patch('/:id')
  async updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderInput: UpdateOrderInput,
  ) {
    await this.logger.verbose(`updating order
    Payload: ${JSON.stringify(updateOrderInput)}`);
    return await this.orderService.update({ id, updateOrderInput });
  }
}
