import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { UpdateOrderInput } from './dto/updateOrder.input';
import { Order } from './entities/order.entity';

interface IUpdate {
  id: number;
  updateOrderInput: UpdateOrderInput;
}

@Injectable()
export class OrderService {
  @InjectRepository(Order)
  private readonly orderRepository: Repository<Order>;
  @InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>;

  async createOrder({ createOrderInput }) {
    const { name, category } = createOrderInput;
    const orderCount = await this.categoryRepository.findOneBy({
      id: category,
    });
    const orderCountUpdate = orderCount.orderCount + 1;

    await this.categoryRepository.update(
      { id: category },
      { orderCount: orderCountUpdate },
    );

    return await this.orderRepository.save({ name: name, category: category });
  }

  async findAll({ category }) {
    const result = await this.orderRepository
      .createQueryBuilder('order')
      .select('order')
      .where('order.category = :categoryId', { categoryId: category })
      .orderBy('order.createAt', 'ASC')
      .getMany();

    return result;
  }

  async updateOrder({ id, updateOrderInput }: IUpdate) {
    const { name, category } = updateOrderInput;
    const order = await this.orderRepository.findOne({ where: { id } });
    console.log('========================');
    console.log(`원래 카테고리 ${order.category}`);
    console.log(`수정할 카테고리 ${category}`);
    console.log('========{...order}================');
    console.log({ ...order });
    console.log('========================');
    order.name = name;
    // order.category = category;

    return await this.orderRepository.save(order);
  }
}
