import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://eddie:1234@cluster0.z6cbd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
