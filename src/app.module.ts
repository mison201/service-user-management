import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import configurations from './common/config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: configurations,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
