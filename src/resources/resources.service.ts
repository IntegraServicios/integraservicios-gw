import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { customCatchError } from './util/request.util';

@Injectable()
export class ResourcesResource {
  private readonly resouresMsUrl;
  constructor(private readonly httpService: HttpService) {
    this.resouresMsUrl = process.env.RESOURCES_MS_URL;
  }
  async createResource(name: string, resourceTypeId: number) {
    const { data }: any = await firstValueFrom(
      this.httpService
        .put(`${this.resouresMsUrl}/resources`, {
          name,
          resourceTypeId,
        })
        .pipe(customCatchError()),
    );
    return data;
  }
  async getResourceTypes(unitId: number) {
    const { data }: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/resources/types/${unitId}`)
        .pipe(customCatchError()),
    );
    return data;
  }

  async getUnits() {
    const { data }: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/resources/unit`)
        .pipe(customCatchError()),
    );
    return data;
  }

  async getAllResources() {
    const res: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/resources`)
        .pipe(customCatchError()),
    );
    return res.data;
  }

  async getUserReservations(userId: number) {
    const res: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/reservations/user/${userId}`)
        .pipe(customCatchError()),
    );
    return res.data;
  }
  async getAllReservations() {
    const res: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/reservations`)
        .pipe(customCatchError()),
    );
    return res.data;
  }

  async reservateResource(data) {
    const res: any = await firstValueFrom(
      this.httpService
        .post(`${this.resouresMsUrl}/reservations`, data)
        .pipe(customCatchError()),
    );
    return res.data;
  }

  async getResourcePendingReservations(id) {
    const res: any = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/reservations/resource/${id}`)
        .pipe(customCatchError()),
    );
    return res.data;
  }

  async updateReservationStatus(id, status) {
    const res: any = await firstValueFrom(
      this.httpService
        .put(`${this.resouresMsUrl}/reservations/status/${id}`, {
          status,
        })
        .pipe(customCatchError()),
    );
    return res.data;
  }
}
