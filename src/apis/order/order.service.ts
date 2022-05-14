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

  async update({ id, updateOrderInput }) {
    const { name, category } = updateOrderInput;

    const order = await this.orderRepository
      .createQueryBuilder('order')
      .innerJoinAndSelect('order.category', 'category')
      .select(['order.id', 'order.name', 'category.id', 'category.orderCount'])
      .where('order.id = :id', { id })
      .getOne();

    const updateOrderCountId = order.category.id;

    order.name = name;
    order.category.id = category;
    order.category.orderCount += 1;

    const updateOrderCountInfo = await this.categoryRepository.findOne({
      where: { id: updateOrderCountId },
    });
    const updateOrderCount = updateOrderCountInfo.orderCount - 1;
    await this.categoryRepository.update(
      { id: updateOrderCountId },
      { orderCount: updateOrderCount },
    );

    return await this.orderRepository.save(order);
  }
}
