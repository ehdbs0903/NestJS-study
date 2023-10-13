import { BaseEntity, Column, PrimaryColumn } from 'typeorm';
import { BoardStatus } from './board.model';

export class Board extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
