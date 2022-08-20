import { registerAs } from '@nestjs/config';
import { configAuth } from './consts';

export default registerAs(configAuth, () => ({
  privateKey: process.env.JWT_PRIVATE_KEY,
  expireTime: process.env.JWT_EXPIRE_TIME,
  refreshKey: process.env.JWT_REFRESH_KEY,
  refreshExpireTime: process.env.JWT_REFRESH_EXPIRE_TIME,
}));
