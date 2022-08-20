import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule as NestJwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { configAuth } from 'src/common/config/consts';
import { JwtService, UserService } from './service';
import { UserController } from './user.controller';

@Module({
  imports: [
    PassportModule,
    NestJwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const privateKey = Buffer.from(configService.get(configAuth).privateKey as string, 'base64').toString();
        const options: JwtModuleOptions = {
          privateKey,
          signOptions: {
            expiresIn: configService.get(configAuth).expireTime,
            algorithm: 'RS256',
          },
        };

        return options;
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService],
})
export class UserModule {}
