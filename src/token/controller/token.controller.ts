import { Body, Controller, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { TokenService } from '../service/token.service';

@ApiTags('token')
@Controller('token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return await this.tokenService.refreshToken(data.oldToken);
  }
}
