import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCalificacioneDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Calificacion } from './entities/calificacione.entity';
import { Model } from 'mongoose';

@Injectable()
export class CalificacionesService {

  constructor(
    @InjectModel( Calificacion.name)
  private readonly califiacionModel:Model<Calificacion>,
  ){}

  async create(createCalificacioneDto: CreateCalificacioneDto) {
    
    try{
      const calificacion = await this.califiacionModel.create(createCalificacioneDto);

      return calificacion;
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async findAll() {
    return await this.califiacionModel.find();
    
  }

  async findOne(id: string) {
    
    const calificacion = await this.califiacionModel.findById(id);

    if( !calificacion) 
      throw new NotFoundException(`Calificacion with id, name or no "${id}" not found`);

    return calificacion;

  }

  async update(id: string, updateCalificacioneDto: UpdateCalificacioneDto) {
    
    const cal = await this.findOne(id);
    try{

      await cal.updateOne( updateCalificacioneDto )
      return {...cal.toJSON(), ...updateCalificacioneDto};
      
    }catch(error){
      this.handleExceptions(error);
    }
    
  }

  async remove(id: string) {
    
    const { deletedCount } = await this.califiacionModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Calificacion with id "${id}" not found`)
    
      return ;
    
  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Calificacion exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Calificacion - Check server logs`)
  }
}
