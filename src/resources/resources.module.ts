import { Module } from '@nestjs/common';
import { UserResource } from './user-resource.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [UserResource],
  exports: [UserResource],
})
export class ResourcesModule {}
