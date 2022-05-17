import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
