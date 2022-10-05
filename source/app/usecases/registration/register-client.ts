import { Inject } from 'typedi';
import { Client } from "../../../domain/entities/client.entities";
import { ClientsRepository } from "../../repositories/clients.respository";
import { UseCase } from '../usecase';


interface RegisterNewClientUseCaseRequest {
    name: string;
    cpf: string;
    email: string;
    planId?: string
}



export class RegisterClients implements UseCase<RegisterNewClientUseCaseRequest, Client>{
    @Inject()
    private clientsRepository: ClientsRepository;
    
    async exec(request: RegisterNewClientUseCaseRequest): Promise<Client>{
        const client = await Client.create({
            name: request.name,
            cpf: request.cpf,
            email: request.email,
            planId: request?.planId
        })

        await this.clientsRepository.insert(client)

        return client
    }
}

