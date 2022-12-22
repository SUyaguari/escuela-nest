import { Module } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';
import { AsignaturaController } from './asignatura.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asignatura, asignaturaSchema } from './entities/asignatura.entity';

@Module({
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Asignatura.name,
        schema: asignaturaSchema
      }
    ])
  ]
})
export class AsignaturaModule {}
