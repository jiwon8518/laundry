import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
