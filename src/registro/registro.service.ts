import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Registro } from './entities/registro.entity';
import { Model } from 'mongoose';

@Injectable()
export class RegistroService {

  constructor(
    @InjectModel( Registro.name)
  private readonly registroModel:Model<Registro>,
  ){}


  async create(createRegistroDto: CreateRegistroDto) {
    
    try{
      const docente = await this.registroModel.create(createRegistroDto);

      return docente;
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async findAll() {
    
    return await this.registroModel.find();

  }

  async findOne(id: string) {

    const registro = await this.registroModel.findById(id);

    if( !registro) 
      throw new NotFoundException(`Registro with id, name or no "${id}" not found`);

    return registro;

  }

  async update(id: string, updateRegistroDto: UpdateRegistroDto) {
    
    const reg = await this.findOne(id);
    try{

      await reg.updateOne( updateRegistroDto )
      return {...reg.toJSON(), ...updateRegistroDto};
      
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async remove(id: string) {
   
    const { deletedCount } = await this.registroModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Registro with id "${id}" not found`)
    
      return ;

  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Registro exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Registro - Check server logs`)
  }
}
