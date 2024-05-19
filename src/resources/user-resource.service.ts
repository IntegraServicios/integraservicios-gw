import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class UserResource {
  private readonly userMsUrl;
  constructor(private readonly httpService: HttpService) {
    this.userMsUrl = process.env.USER_MS_URL;
  }
  async validateUser(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .post(`${this.userMsUrl}/user/validate`, {
          username,
          password,
        })
        .pipe(
          catchError((error: AxiosError) => {
            if (error.code === 'ECONNREFUSED') {
              throw new ServiceUnavailableException({
                service: 'User Service',
              });
            }
            throw new BadRequestException(error.response.data);
          }),
        ),
    );
    return data;
  }
  async createUser(
    name: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
  ) {
    const { data } = await firstValueFrom(
      this.httpService
        .put(`${this.userMsUrl}/user`, {
          name,
          lastName,
          email,
          password,
          role,
        })
        .pipe(
          catchError((error: AxiosError) => {
            if (error.code === 'ECONNREFUSED') {
              throw new ServiceUnavailableException({
                service: 'User Service',
              });
            }
            throw new BadRequestException(error?.response?.data);
          }),
        ),
    );
    return data;
  }
}
