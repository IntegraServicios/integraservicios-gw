import { Module } from '@nestjs/common';
import { IsResourcesController } from './is-resources.controller';
import { IsResourcesService } from './is-resources.service';
import { ResourcesModule } from 'src/resources/resources.module';

@Module({
  imports: [ResourcesModule],
  controllers: [IsResourcesController],
  providers: [IsResourcesService],
})
export class IsResourcesModule {}
