import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { Asignatura } from './entities/asignatura.entity';

@Injectable()
export class AsignaturaService {

  constructor(
    @InjectModel( Asignatura.name)
  private readonly asignaturaModel:Model<Asignatura>,
  ){}

  async create(createAsignaturaDto: CreateAsignaturaDto) {

    try{
      const calificacion = await this.asignaturaModel.create(createAsignaturaDto);

      return calificacion;
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async findAll() {

    return await this.asignaturaModel.find();

  }

  async findOne(id: string) {
    

    const asignatura = await this.asignaturaModel.findById(id);

    if( !asignatura) 
      throw new NotFoundException(`Asignatura with id, name or no "${id}" not found`);

    return asignatura;

  }

  async update(id: string, updateAsignaturaDto: UpdateAsignaturaDto) {
    
    const as = await this.findOne(id);
    try{

      await as.updateOne( updateAsignaturaDto )
      return {...as.toJSON(), ...updateAsignaturaDto};
      
    }catch(error){
      this.handleExceptions(error);
    }
    

  }

  async remove(id: string) {

    const { deletedCount } = await this.asignaturaModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Asignatura with id "${id}" not found`)
    
      return ;

  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Asignatura exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Asignatura - Check server logs`)
  }
}
