import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  totalCount: number;
}
