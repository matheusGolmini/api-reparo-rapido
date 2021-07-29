// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ProviderService } from '../service/service-provider.service';
// import { UpdateProviderDto } from '../dto/update-provider.dto';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('provider')
// @Controller('provider')
// export class ProviderController {
//   constructor(private readonly providerService: ProviderService) {}

//   @Post()
//   create(@Body() createProviderDto: any) {
//     return this.providerService.create(createProviderDto);
//   }

//   @Get()
//   findAll() {
//     return this.providerService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.providerService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateProviderDto: UpdateProviderDto,
//   ) {
//     return this.providerService.update(+id, updateProviderDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.providerService.remove(+id);
//   }
// }
