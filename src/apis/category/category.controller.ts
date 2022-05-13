import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './Category.service';
import { CreateCategoryInput } from './dto/createCategory.input';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  private logger = new Logger('CategoryController');
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createCategory(
    @Body() createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.createCategory({ createCategoryInput });
  }

  @Get()
  fetchCategorys(): Promise<Category[]> {
    this.logger.verbose(`trying to  get all categorys`);
    return this.categoryService.findAll();
  }
}
