import Container, { Inject, Service } from 'typedi';
import { Client } from "../../../domain/entities/client.entities";
import { ClientsRepository } from "../../repositories/clients.respository";
import { UseCase } from '../usecase';


interface RegisterNewClientUseCaseRequest {
    name: string;
    cpf: string;
    email: string;
    planId?: string
}


@Service()
export class RegisterClients implements UseCase<RegisterNewClientUseCaseRequest, Client>{

    async exec(request: RegisterNewClientUseCaseRequest): Promise<Client>{

        const client = Client.create({
            name: request.name,
            cpf: request.cpf,
            email: request.email,
           // planId: request?.planId
        })

        await Container.get(ClientsRepository).insert(client)
        return client
    }
}

