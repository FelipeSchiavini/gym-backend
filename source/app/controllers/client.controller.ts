import { Response } from 'express';
import { Body, Get, JsonController, Params, Post, QueryParam, QueryParams, Res } from 'routing-controllers';
import Container, { Inject } from 'typedi';
import { AppDataSource } from '../../services';
import { ClientTable } from '../../services/model/clients';
import { RegisterClients } from '../usecases/registration/register-client';
import { ClientControllerInput } from './client.model';


@JsonController()
export class ClientController  {

  private clientRepository = AppDataSource.getRepository(ClientTable)

  @Post('/client')
  async createClient(@Body() input: ClientControllerInput, @Res() response: Response) {
      const client = await this.clientRepository.findBy({ email: input.email })
      if(client.length > 0) {
        return response.status(200).json({'client': 'email já inserido na plataforma'})
      }
      await Container.get(RegisterClients).exec(input)
      response.status(200).json({'client': 'inserido com sucesso', 'user': client })   
  }

  @Get('/client')
  async getClientById(@QueryParams() id: number, @Res() response:any){
  const user = await this.clientRepository.findBy({ id: id })
  return{
    ...user
  }

  
}