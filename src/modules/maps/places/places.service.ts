import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
    constructor(
        private googleMapsClient: GoogleMapsClient,
        private configService: ConfigService
    ) { }

    async findPlaces(text: string): Promise<unknown> {
        return await this.googleMapsClient.findPlaceFromText({
            params: {
                input: text,
                inputtype: PlaceInputType.textQuery,
                fields: ['place_id', 'formatted_anddress', 'geometry', 'name'],
                key: this.configService.get<string>('KEY_MAPS') ?? '',
            },
        });
    }
}
