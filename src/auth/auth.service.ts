import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResource } from 'src/resources/user-resource.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userResource: UserResource,
    private jwtService: JwtService,
  ) {}
  async login(username: string, password: string): Promise<any> {
    const user = await this.userResource.validateUser(username, password);
    return { access_token: this.jwtService.sign(user) };
  }
}
