import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Matricula } from './entities/matricula.entity';
import { Model } from 'mongoose';

@Injectable()
export class MatriculaService {

  constructor(
    @InjectModel( Matricula.name)
  private readonly matriculaModel:Model<Matricula>,
  ){}

  async create(createMatriculaDto: CreateMatriculaDto) {

    try{
      const matricula = await this.matriculaModel.create(createMatriculaDto);

      return matricula;
    }catch(error){
      this.handleExceptions(error);
    }

  }

  async findAll() {

    return await this.matriculaModel.find();

  }

  async findOne(id: string) {

    const matricula = await this.matriculaModel.findById(id);

    if( !matricula) 
      throw new NotFoundException(`Matricula with id, name or no "${id}" not found`);

    return matricula;

  }

  async update(id: string, updateMatriculaDto: UpdateMatriculaDto) {

    const mat = await this.findOne(id);
    try{

      await mat.updateOne( updateMatriculaDto )
      return {...mat.toJSON(), ...updateMatriculaDto};
      
    }catch(error){
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {

    const { deletedCount } = await this.matriculaModel.deleteOne({ _id: id });
    if( deletedCount ===0)
      throw new BadRequestException(`Matricula with id "${id}" not found`)
    
      return ;

  }

  private handleExceptions(error:any){

    if (error.code === 11000){
      throw new BadRequestException(`Matricula exist in bd ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Matricula - Check server logs`)
  }

}
