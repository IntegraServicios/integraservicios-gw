import {
  BadRequestException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError } from 'rxjs';

export function customCatchError() {
  return catchError((error: AxiosError) => {
    console.error(error);
    if (error.code === 'ECONNREFUSED') {
      throw new ServiceUnavailableException({
        service: 'Resources Service',
      });
    }
    throw new BadRequestException(error.response?.data);
  });
}
