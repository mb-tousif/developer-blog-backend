import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [UsersModule],
})
export class UsersModule {}
