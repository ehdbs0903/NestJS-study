import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(AuthCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) AuthCredentialsDto: AuthCredentialsDto) {
    return this.authService.signIn(AuthCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req.headers);
  }
}
