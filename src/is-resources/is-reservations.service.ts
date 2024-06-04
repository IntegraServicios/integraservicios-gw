import { Injectable } from '@nestjs/common';
import { ResourcesResource } from 'src/resources/resources.service';

@Injectable()
export class IsReservationsService {
  constructor(private readonly resourcesResource: ResourcesResource) {}
  getUserReservations(userId: number) {
    return this.resourcesResource.getUserReservations(userId);
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
