import { Article } from 'src/articles/entities/article.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({nullable: true})
  description: string;

  @ManyToOne(() => Category, category => category.categories)
  category: Category;

  @OneToMany(type => Category, category => category.category)
  categories: Category[];

  @OneToMany(type => Article, article => article.category)
  articles: Article[];
}
