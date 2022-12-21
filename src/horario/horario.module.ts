import { Module } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioController } from './horario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Horario, horarioSchema } from './entities/horario.entity';

@Module({
  controllers: [HorarioController],
  providers: [HorarioService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Horario.name,
        schema: horarioSchema
      }
    ])
  ]
})
export class HorarioModule {}
