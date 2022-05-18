import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/apis/order/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Item {
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
  @ManyToOne(() => Order, { cascade: true, onDelete: 'CASCADE' })
  order: Order;
}
