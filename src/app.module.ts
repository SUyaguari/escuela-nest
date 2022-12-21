import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesModule } from './docentes/docentes.module';
import { RegistroModule } from './registro/registro.module';
import { MatriculaModule } from './matricula/matricula.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { HorarioModule } from './horario/horario.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/escuela"),
    DocentesModule,
    RegistroModule,
    MatriculaModule,
    EstudiantesModule,
    AsignaturaModule,
    HorarioModule,
    CalificacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
