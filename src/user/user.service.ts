import { Injectable } from '@nestjs/common';
import { UserResource } from 'src/resources/user-resource.service';

@Injectable()
export class UserService {
  constructor(private readonly userResource: UserResource) {}
  createUser(name, lastName, email, password, role) {
    return this.userResource.createUser(name, lastName, email, password, role);
  }
}
