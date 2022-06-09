import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GamesprofileService } from './gamesprofile.service';

@Controller('gamesprofile')
export class GamesprofileController {
  constructor(private readonly gamesprofileService: GamesprofileService) {}

  @ApiTags('homepage')
  @Get('homepage/:profileId')
  @ApiOperation({
    summary: 'lista de favoritos.',
  })
  findOne(@Param('profileId') id: string) {
    return this.gamesprofileService.findOne(id);
  }
}
