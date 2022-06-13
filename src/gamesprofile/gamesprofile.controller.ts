import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GamesprofileService } from './gamesprofile.service';

@ApiTags('homepage')
@Controller('gamesprofile')
export class GamesprofileController {
  constructor(private readonly gamesprofileService: GamesprofileService) {}

  @Get('homepage/:profileId')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'lista de favoritos.',
  })
  findOne(@Param('profileId') id: string) {
    return this.gamesprofileService.findOne(id);
  }
}
