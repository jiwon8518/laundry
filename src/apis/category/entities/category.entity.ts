import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/apis/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column()
  @ApiProperty({ description: '이름' })
  name: string;

  @Column({ default: 0 })
  @ApiProperty({ description: '주문 갯수' })
  orderCount: number;

  @OneToMany(() => Order, (order) => order.category, { eager: true })
  order: Order[];
}
