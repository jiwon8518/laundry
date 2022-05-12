import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './Category.service';
import { CreateCategoryInput } from './dto/createCategory.input';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createCategory(
    @Body() createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryInput);
  }
}
