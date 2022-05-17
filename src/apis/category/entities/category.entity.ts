import { Order } from 'src/apis/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  orderCount: number;

  @OneToMany(() => Order, (order) => order.category, { eager: true })
  order: Order[];
}
