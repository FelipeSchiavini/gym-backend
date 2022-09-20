import { Body, Get, JsonController, Params, Post } from 'routing-controllers';
import { ClientControllerInput } from './client.model';

@JsonController()
export class ClientController {
  @Post('/client')
  createClient(@Body() input: ClientControllerInput) {
    return {
        input
    }
  }

  @Get('/client/:id')
  getClientById(@Params() id: string){
    return {
        id: 'client-faker-test'
    }
  }
}