import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: 'id' })
  id: number;

  @Column()
  @ApiProperty({ description: '이름' })
  name: string;

  @CreateDateColumn()
  @ApiProperty({ description: '등록한 날짜' })
  createAt: Date;

  @JoinColumn()
  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  category: Category;

  @OneToMany(() => Item, (item) => item.order, { eager: true })
  item: Item[];
}
