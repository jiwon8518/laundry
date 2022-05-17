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
  async find({ id }) {
    const result = await this.orderRepository
      .createQueryBuilder('order')
      .innerJoinAndSelect('order.item', 'item')
      .select(['order', 'item.id', 'item.name'])
      .where('order.id = :id', { id: id })
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

    const categoryId = order.category.id;
    const categoryInfo = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });
    const categoryInfoOrderCount = categoryInfo.orderCount;
    const result = await this.categoryRepository.findOne({
      where: { id: category },
    });
    const OrderCount = result.orderCount;

    if (category !== undefined) {
      order.category.id = category;
    }
    if (order.category.id !== category) {
      order.category.orderCount = OrderCount + 1;
    }
    if (name !== undefined) {
      order.name = name;
    }

    const updateMinusCount = await this.categoryRepository.update(
      { id: categoryId },
      { orderCount: categoryInfoOrderCount - 1 },
    );
    await this.orderRepository.save(order);
    return updateMinusCount;
  }
}
