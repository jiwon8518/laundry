import { Category } from 'src/apis/category/entities/category.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  category: Category;
}
