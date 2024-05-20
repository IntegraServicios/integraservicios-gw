import { Module } from '@nestjs/common';
import { UserResource } from './user-resource.service';
import { HttpModule } from '@nestjs/axios';
import { ResourcesResource } from './resources.service';

@Module({
  imports: [HttpModule],
  providers: [UserResource, ResourcesResource],
  exports: [UserResource, ResourcesResource],
})
export class ResourcesModule {}
