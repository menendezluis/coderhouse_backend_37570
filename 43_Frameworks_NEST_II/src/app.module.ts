import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import * as dotenv from 'dotenv';
import FirstMiddleware from './middleware/firstMiddleware';
import { UsersModule } from './users/users.module';

//dotenv.config();

//const { USER_MONGO, PASS_MONGO, DB_MONGO } = process.env;
//const MONGOURL = `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.pnpufdn.mongodb.net/${process.env.DB_MONGO}?retryWrites=true&w=majority`;
//const MONGO_URL = `mongodb+srv://coderhouse:coder123@cluster0.pnpufdn.mongodb.net/usuarios37570?retryWrites=true&w=majority`;
//console.log(MONGOURL);
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
/*
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.pnpufdn.mongodb.net/${process.env.DB_MONGO}?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
}) */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('*');
  }
}
