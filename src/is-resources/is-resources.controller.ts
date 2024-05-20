import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { IsResourcesService } from './is-resources.service';

@Controller('resources')
export class IsResourcesController {
  constructor(private readonly isResourcesService: IsResourcesService) {}
  @Put()
  createResource(@Body() data) {
    return this.isResourcesService.createResource(
      data.name,
      data.resourceTypeId,
    );
  }
  @Get()
  getAllResources() {
    return this.isResourcesService.getAllResources();
  }

  @Get('types/:unitId')
  getResourceTypes(@Param('unitId') unitId: number) {
    return this.isResourcesService.getResourceTypes(unitId);
  }
  @Get('unit')
  getUnits() {
    return this.isResourcesService.getUnits();
  }
}
