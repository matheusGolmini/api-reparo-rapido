import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../../auth/auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({
    type: LoginDto,
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login-provider')
  @ApiBody({
    type: LoginDto,
  })
  async loginProvider(@Request() req) {
    return this.authService.loginProvider(req.user);
  }

  @Post('login-token')
  async loginToken(@Body() data) {
    return this.authService.loginToken(data.token);
  }
}
