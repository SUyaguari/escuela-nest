import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Estudiante, estudianteSchema } from './entities/estudiante.entity';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Estudiante.name,
        schema: estudianteSchema
      }
    ])
  ]
})
export class EstudiantesModule {}
