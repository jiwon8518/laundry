import { Category } from 'src/apis/category/entities/category.entity';
import { Item } from 'src/apis/item/entities/item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  category: Category;

  @OneToMany(() => Item, (item) => item.order, { eager: true })
  item: Item;
}
