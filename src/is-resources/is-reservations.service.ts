import { Injectable } from '@nestjs/common';
import { ResourcesResource } from 'src/resources/resources.service';
import { UserResource } from '../resources/user-resource.service';

@Injectable()
export class IsReservationsService {
  constructor(
    private readonly resourcesResource: ResourcesResource,
    private readonly userResource: UserResource,
  ) {}
  async getUserReservations(userId: number, role: string) {
    let data;
    if (role === 'ADMIN') {
      data = await this.resourcesResource.getAllReservations();
    } else {
      data = await this.resourcesResource.getUserReservations(userId);
    }
    for (const reservation of data) {
      reservation.user = await this.userResource.getUserById(
        reservation.userId,
      );
      reservation.email = reservation.user.email;
    }
    return data;
  }

  reservateResource(data) {
    return this.resourcesResource.reservateResource(data);
  }

  getResourcePendingReservations(id) {
    return this.resourcesResource.getResourcePendingReservations(id);
  }

  updateReservationStatus(id, status) {
    return this.resourcesResource.updateReservationStatus(id, status);
  }
}
