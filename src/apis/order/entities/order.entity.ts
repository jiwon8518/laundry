import { Category } from 'src/apis/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  category: Category;
}