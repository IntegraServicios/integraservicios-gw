import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { customCatchError } from './util/request.util';

@Injectable()
export class UserResource {
  private readonly userMsUrl;
  constructor(private readonly httpService: HttpService) {
    this.userMsUrl = process.env.USER_MS_URL;
  }
  async validateUser(username: string, password: string) {
    const { data }: any = await firstValueFrom(
      this.httpService
        .post(`${this.userMsUrl}/user/validate`, {
          username,
          password,
        })
        .pipe(customCatchError()),
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
    const { data }: any = await firstValueFrom(
      this.httpService
        .put(`${this.userMsUrl}/user`, {
          name,
          lastName,
          email,
          password,
          role,
        })
        .pipe(customCatchError()),
    );
    return data;
  }
}
