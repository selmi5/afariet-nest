import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Article } from 'src/articles/entities/article.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Category {
  @Field(() => ID, { description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({nullable: true})
  description: string;

  @ManyToOne(() => Category, category => category.categories)
  category: Category;

  @OneToMany(type => Category, category => category.category)
  categories: Category[];

  @OneToMany(type => Article, article => article.category)
  articles: Article[];
}
