import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('api/v1/maps/directions')
export class DirectionsController {
    constructor(private directionsService: DirectionsService) { }

    @Get()
    public getDirections(@Query('originalId') originalId: string, @Query('destinationId') destinationId: string): unknown {
        return this.directionsService.getDirections(originalId, destinationId);
    }
}
