import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('api/v1/maps/places')
export class PlacesController {
    constructor(private placesService: PlacesService) { }

    @Get()
    public findPlaces(@Query('text') text: string): unknown {
        return this.placesService.findPlaces(text);
    }
}
