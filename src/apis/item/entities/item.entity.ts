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
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createAt: Date;

  @JoinColumn()
  @ManyToOne(() => Order, { cascade: true, onDelete: 'CASCADE' })
  order: Order;
}
