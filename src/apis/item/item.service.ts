import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../order/entities/order.entity';
import { UpdateItemInput } from './dto/updateItem.input';
import { Item } from './entities/item.entity';

interface IUpdate {
  id: number;
  updateItemInput: UpdateItemInput;
}

@Injectable()
export class ItemService {
  @InjectRepository(Item)
  private readonly itemRepository: Repository<Item>;
  @InjectRepository(Order)
  private readonly orderRepository: Repository<Order>;

  async create({ createItemInput }) {
    return await this.itemRepository.save({ ...createItemInput });
  }

  async update({ id, updateItemInput }) {
    const { name, order } = updateItemInput;

    const item = await this.itemRepository
      .createQueryBuilder('item')
      .innerJoinAndSelect('item.order', 'order')
      .where('item.id = :id', { id: id })
      .getOne();

    if (name !== undefined) {
      item.name = name;
    }
    if (order !== undefined) {
      item.order.id = order;
    }

    return await this.itemRepository.save(item);
  }

  async find({ orderId }) {
    const items = await this.orderRepository.find({
      where: { id: orderId },
      relations: ['item'],
    });

    return items;
  }
}
