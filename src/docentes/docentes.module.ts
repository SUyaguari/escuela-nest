import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Docente, docenteSchema } from './entities/docente.entity';

@Module({
  controllers: [DocentesController],
  providers: [DocentesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Docente.name,
        schema: docenteSchema
      }
    ])
  ]
})
export class DocentesModule {}
