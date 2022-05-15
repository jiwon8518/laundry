import { Category } from 'src/apis/category/entities/category.entity';
import { Item } from 'src/apis/item/entities/item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @JoinColumn()
  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  category: Category;

  @Column({ nullable: true })
  categoryId: number;

  @OneToMany(() => Item, (item) => item.order, { eager: true })
  item: Item[];
}
