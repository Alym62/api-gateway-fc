import { MapsModule } from '@modules/maps/maps.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MapsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }