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
}
