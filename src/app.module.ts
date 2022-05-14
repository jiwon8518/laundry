import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './apis/category/category.module';
import { OrderModule } from './apis/order/order.module';
import { ItemModule } from './apis/item/item.module';
import { ItemController } from './apis/item/item.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'task',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CategoryModule,
    OrderModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
