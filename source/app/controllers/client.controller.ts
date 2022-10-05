import { Body, Get, JsonController, Param, Params, Post, QueryParam, Res } from 'routing-controllers';
import { AppDataSource } from '../../services';
import { ClientTable } from '../../services/model/clients';
import { ClientControllerInput } from './client.model';
import { Response  } from 'express';
import { Client } from '../../domain/entities/client.entities';
import { ClientsRepository } from '../repositories/clients.respository';
import { RegisterClients } from '../usecases/registration/register-client';
import Container from 'typedi';


@JsonController()
export class ClientController  {

  private clientRepository = AppDataSource.getRepository(ClientTable)


  @Post('/client')
  async createClient(@Body() input: ClientControllerInput, @Res() response: Response) {
    

    const { name, cpf, email } = input

    try{
      const client = Client.create(input)
      Container.get(RegisterClients).exec(input)

    } catch (error){
      console.log(error)
      response.status(500).json({message :"Internal server Error!"})
    }
  }

  @Get('/client/:id')
  async getClientById(@Params() id: number, @Res() response:any){
  try{
    const user = await this.clientRepository.findBy({ id })

    return{
      user
    }
    } catch (error){
      console.log(error)
      response.status(500).json({message :error})
    }
  }

  @Get('/client')
  async getClientByName(@QueryParam('name') name: string, @Res() response:any){
  try{
    const user = await this.clientRepository.findBy({ name })

    return{ 
      user
    }
    } catch (error){
      console.log(error)
      response.status(500).json({message :error})
    }
  }
}