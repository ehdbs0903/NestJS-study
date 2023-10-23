import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, ctx): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
