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
import { CreateItemInput } from './dto/createItem.input';
import { UpdateItemInput } from './dto/updateItem.input';
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

  @Get('orderId/:orderId')
  async fetchItems(@Param('orderId') orderId: number) {
    this.logger.verbose(`CategoryId ${orderId} trying to find all items`);
    return await this.itemService.find({ orderId });
  }

  @Patch('/:id')
  async updateItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItemInput: UpdateItemInput,
  ) {
    await this.logger.verbose(`updating a item
    Payload: ${JSON.stringify(updateItemInput)}`);
    return await this.itemService.update({ id, updateItemInput });
  }
}
