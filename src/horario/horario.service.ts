import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario } from './entities/horario.entity';

@Injectable()
export class HorarioService {

  constructor(
    @InjectModel( Horario.name)
  private readonly horarioModel:Model<Horario>,
  ){}

  async create(createHorarioDto: CreateHorarioDto) {
  
    try{
      const horario = await this.horarioModel.create(createHorarioDto);

      return horario;
    }catch(error){
      this.handleExceptions(error);
    }
    
  }

  async findAll() {
    
    return await this.horarioModel.find();
    
  }

  async findOne(id: string) {

    const horario = await this.horarioModel.findById(id);

    if( !horario) 
      throw new NotFoundException(`Horario with id, name or no "${id}" not found`);

    return horario;

  }

  async update(id: string, updateHorarioDto: UpdateHorarioDto) {
    
    const hor = await this.findOne(id);
    try{

      await hor.updateOne( updateHorarioDto )
      return {...hor.toJSON(), ...updateHorarioDto};
      
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async remove(id: string) {
    
    const { deletedCount } = await this.horarioModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Horario with id "${id}" not found`)
    
      return ;
    
  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Horario exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Horario - Check server logs`)
  }
}
