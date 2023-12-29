import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // MongooseModule.forRoot(new ConfigService().get('MONGODB_CONNECTION_URL')),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('MONGODB_CONNECTION_URL'),
    //   }),
    //   inject: [ConfigService],
    // }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL),
    UsersModule,
    BlogsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [UsersModule, BlogsModule, AuthModule],
})
export class AppModule {}
