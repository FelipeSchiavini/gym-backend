import { Client } from "../../../domain/entities/client.entities";
import { isEmail } from "../../../utils/regex/email";
import { ClientsRepository } from "../../repositories/clients.respository";


interface RegisterNewClientUseCaseRequest {
    name: string;
    cpf: string;
    email: string;
    planId: string
}

export class RegisterClients {
    constructor(private clientsRepository: ClientsRepository) {
    }
//(input: CreateAppointmentUseCaseRequest): Promise<CreateAppointmentUseCaseResponse> {
    async exec(input: RegisterNewClientUseCaseRequest): Promise<Client>{
        if(isEmail.test(input.email)) {
            throw Error('This is not an valid email!')
        }

        if(input.name.length < 3){
            throw Error('This is not an valid name!')
        }

        const client = await Client.create({
            name: input.name,
            cpf: input.cpf,
            email: input.email,
            planId: input.planId
        })

        await this.clientsRepository.insert(client)

        return client
    }
}