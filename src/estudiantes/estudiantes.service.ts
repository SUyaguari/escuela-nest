import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Estudiante } from './entities/estudiante.entity';
import { Model } from 'mongoose';

@Injectable()
export class EstudiantesService {

  constructor(
    @InjectModel( Estudiante.name)
    private readonly estudianteModel:Model<Estudiante>,
  ){}

  async create(createEstudianteDto: CreateEstudianteDto) {
    try{
      const docente = await this.estudianteModel.create(createEstudianteDto);

      return docente;
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async findAll() {
    
    return await this.estudianteModel.find();
  }

  async findOne(id: string) {
    
    const estudiante = await this.estudianteModel.findById(id);

    if( !estudiante) 
      throw new NotFoundException(`Docente with id, name or no "${id}" not found`);

    return estudiante;
  }

  async update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
  
    const este = await this.findOne(id);
    try{

      await este.updateOne( updateEstudianteDto )
      return {...este.toJSON(), ...updateEstudianteDto};
      
    }catch(error){
      this.handleExceptions(error);
    }

  
  }

  async remove(id: string) {
    
    const { deletedCount } = await this.estudianteModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Estudiante with id "${id}" not found`)
    
      return ;

  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Estudiante exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Estudiante - Check server logs`)
  }

}
