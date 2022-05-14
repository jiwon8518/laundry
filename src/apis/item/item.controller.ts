import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemInput } from './dto/createItem.input';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  private logger = new Logger('ItemController');
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createItem(@Body() createItemInput: CreateItemInput): Promise<Item> {
    this.logger.verbose(`creating a new item
    Payload: ${JSON.stringify(createItemInput)}`);
    return await this.itemService.create({ createItemInput });
  }
}
