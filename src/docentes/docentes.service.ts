import { Injectable } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';

@Injectable()
export class DocentesService {

  constructor(
    @InjectModel( Docente.name)
    private readonly docenteModel:Model<Docente>,
  ){}
  async create(createDocenteDto: CreateDocenteDto) {

    try{
      const docente = await this.docenteModel.create(createDocenteDto);

      return docente;
    }catch(error){
      this.handleExceptions(error);
    }



  }

  async findAll() {
    
    return await this.docenteModel.find();

  }

  async findOne(id: string) {
    const docente = await this.docenteModel.findById(id);

    if( !docente) 
      throw new NotFoundException(`Docente with id, name or no "${id}" not found`);

    return docente;
  }

  async update(id: string, updateDocenteDto: UpdateDocenteDto) {
   
    const doc = await this.findOne(id);
    try{

      await doc.updateOne( updateDocenteDto )
      return {...doc.toJSON(), ...updateDocenteDto};
      
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async remove(id: string) {
    
    const { deletedCount } = await this.docenteModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Docente with id "${id}" not found`)
    
      return ;

  }


  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Docente exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Docente - Check server logs`)
  }

}
