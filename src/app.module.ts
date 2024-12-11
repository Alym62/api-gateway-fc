import { MapsModule } from '@modules/maps/maps.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './modules/routes/routes.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MapsModule,
    RoutesModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
