import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { IsReservationsService } from './is-reservations.service';
import { ExpressRequestExtended } from 'src/utils/express-extended';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: IsReservationsService) {}
  @Get('user')
  getUserReservations(@Req() req: ExpressRequestExtended) {
    return this.reservationsService.getUserReservations(
      req.user.id,
      req.user.role,
    );
  }

  @Post()
  reservateResource(@Body() data: any, @Req() req: ExpressRequestExtended) {
    data.userId = req.user.id;
    return this.reservationsService.reservateResource(data);
  }

  @Get('resource/:id')
  getResourcePendingReservations(@Param('id') id: number) {
    return this.reservationsService.getResourcePendingReservations(id);
  }

  @Put('status/:id')
  updateReservationStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ) {
    return this.reservationsService.updateReservationStatus(id, status);
  }
}
