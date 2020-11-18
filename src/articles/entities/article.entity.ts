import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/gql/categories-gql/entities/category.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  title: string;

  description: string;

  @ManyToOne(() => Category, category => category.categories)
  category: Category;

  @OneToMany(type => Offer, offer => offer.article)
  offers: Offer[];
}
