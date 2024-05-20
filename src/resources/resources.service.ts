import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ResourcesResource {
  private readonly resouresMsUrl;
  constructor(private readonly httpService: HttpService) {
    this.resouresMsUrl = process.env.RESOURCES_MS_URL;
  }
  async createResource(name: string, resourceTypeId: number) {
    const { data } = await firstValueFrom(
      this.httpService
        .put(`${this.resouresMsUrl}/resources`, {
          name,
          resourceTypeId,
        })
        .pipe(
          catchError((error: AxiosError) => {
            if (error.code === 'ECONNREFUSED') {
              throw new ServiceUnavailableException({
                service: 'Resources Service',
              });
            }
            throw new BadRequestException(error.response.data);
          }),
        ),
    );
    return data;
  }
  async getResourceTypes(unitId: number) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`${this.resouresMsUrl}/resources/types/${unitId}`)
        .pipe(
          catchError((error: AxiosError) => {
            if (error.code === 'ECONNREFUSED') {
              throw new ServiceUnavailableException({
                service: 'Resources Service',
              });
            }
            throw new BadRequestException(error.response.data);
          }),
        ),
    );
    return data;
  }

  async getUnits() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.resouresMsUrl}/resources/units`).pipe(
        catchError((error: AxiosError) => {
          if (error.code === 'ECONNREFUSED') {
            throw new ServiceUnavailableException({
              service: 'Resources Service',
            });
          }
          throw new BadRequestException(error.response.data);
        }),
      ),
    );
    return data;
  }

  async getAllResources() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.resouresMsUrl}/resources`).pipe(
        catchError((error: AxiosError) => {
          if (error.code === 'ECONNREFUSED') {
            throw new ServiceUnavailableException({
              service: 'Resources Service',
            });
          }
          throw new BadRequestException(error.response.data);
        }),
      ),
    );
    return data;
  }
}
