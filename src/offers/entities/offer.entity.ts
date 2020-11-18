import { Article } from 'src/articles/entities/article.entity';
import { Store } from 'src/stores/entities/store.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column()
  price: number;

  @ManyToOne(() => Article, article => article.offers)
  article: Article;

  @ManyToOne(() => Store, store => store.offers)
  store: Store;
}
