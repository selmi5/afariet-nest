import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Offer } from 'src/offers/entities/offer.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @OneToMany(type => Offer, offer => offer.store)
  offers: Offer[];
}