import { Module } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CalificacionesController } from './calificaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Calificacion, calificacionSchema } from './entities/calificacione.entity';

@Module({
  controllers: [CalificacionesController],
  providers: [CalificacionesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Calificacion.name,
        schema: calificacionSchema
      }
    ])
  ]
})
export class CalificacionesModule {}
