import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './apis/category/category.module';
import { OrderModule } from './apis/order/order.module';
import { ItemModule } from './apis/item/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'laundry_database',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'laundry',
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
