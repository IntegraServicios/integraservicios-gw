import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { IsResourcesService } from './is-resources.service';

@Controller('resources')
export class IsResourcesController {
  constructor(private readonly isResourcesService: IsResourcesService) {}
  @Put()
  createResource(@Body() data) {
    this.isResourcesService.createResource(data.name, data.resourceTypeId);
  }
  @Get()
  getAllResources() {
    this.isResourcesService.getAllResources();
  }

  @Get('types/:unitId')
  getResourceTypes(@Param('unitId') unitId: number) {
    this.isResourcesService.getResourceTypes(unitId);
  }
  @Get('unit')
  getUnits() {
    this.isResourcesService.getUnits();
  }
}
