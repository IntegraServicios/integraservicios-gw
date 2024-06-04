import { Request } from 'express';

export class ExpressRequestExtended extends Request {
  user: UserData;
}

class UserData {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: string;
  iat: number;
}
