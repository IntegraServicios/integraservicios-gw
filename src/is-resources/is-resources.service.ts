import { Injectable } from '@nestjs/common';
import { ResourcesResource } from 'src/resources/resources.service';

@Injectable()
export class IsResourcesService {
  constructor(private readonly resourcesResource: ResourcesResource) {}
  createResource(name: string, resourceTypeId: number) {
    return this.resourcesResource.createResource(name, resourceTypeId);
  }
  getAllResources() {
    return this.resourcesResource.getAllResources();
  }
  getResourceTypes(unitId: number) {
    return this.resourcesResource.getResourceTypes(unitId);
  }
  getUnits() {
    return this.resourcesResource.getUnits();
  }
}
