import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CategoriesModule } from './categories-gql/categories.module';
// import { ArticlesModule } from './articles-gql/articles.module';
// import { StoresModule } from './stores-gql/stores.module';
// import { OffersModule } from './offers-gql/offers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { ArticlesModule } from './articles/articles.module';
import { StoresModule } from './stores/stores.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoriesModule,
    ArticlesModule,
    StoresModule,
    OffersModule,
    // GraphQLModule.forRoot({autoSchemaFile: join(process.cwd(), 'src/schema.gql'),}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
