import { Module } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Matricula, matriculaSchema } from './entities/matricula.entity';

@Module({
  controllers: [MatriculaController],
  providers: [MatriculaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Matricula.name,
        schema: matriculaSchema
      }
    ])
  ]
})
export class MatriculaModule {}
