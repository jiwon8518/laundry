import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/createCategory.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  @InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>;

  async createCategory({ createCategoryInput }) {
    return await this.categoryRepository.save(createCategoryInput);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }
}
