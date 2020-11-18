import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoriesRepository: Repository<Category>, private connection: Connection) { }
  async create(createCategoryInput: CreateCategoryInput) {
    let data = await this.connection.transaction(async manager => {
      await manager.save(createCategoryInput);
    });
    return data;
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
