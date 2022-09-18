import { Client } from "../../../domain/entities/client.entities";
import { isEmail } from "../../../utils/regex/email";


interface RegisterNewClientRequest {
    name: string;
    cpf: string;
    email: string;
    planId: string
}

export class RegisterClients {
    constructor() {
        console.log('register initialized')    
    }

    async exec({name, cpf, email, planId}: RegisterNewClientRequest): Promise<Client>{
        if(isEmail.test(email)) {
            throw Error('This is not an valid email!')
        }

        if(name.length < 3){
            throw Error('This is not an valid name!')
        }

        const client = await Client.create({
            name,
            cpf,
            email,
            planId
        })

        return client
    }
}