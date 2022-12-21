import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Registro, registroSchema } from './entities/registro.entity';

@Module({
  controllers: [RegistroController],
  providers: [RegistroService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Registro.name,
        schema: registroSchema
      }
    ])
  ]
})
export class RegistroModule {}
