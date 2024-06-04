import { Module } from '@nestjs/common';
import { IsResourcesController } from './is-resources.controller';
import { IsResourcesService } from './is-resources.service';
import { ResourcesModule } from 'src/resources/resources.module';
import { ReservationsController } from './reservations.controller';
import { IsReservationsService } from './is-reservations.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ResourcesModule, AuthModule],
  controllers: [IsResourcesController, ReservationsController],
  providers: [IsResourcesService, IsReservationsService],
})
export class IsResourcesModule {}
