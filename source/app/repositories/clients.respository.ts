import { Service } from "typedi";
import { Client } from "../../domain/entities/client.entities";
import { AppDataSource, clientRepository } from "../../services";
import { ClientTable } from "../../services/model/clients";

export interface ClientsRepository {
    findById (id: number): Promise<Client | null>;
    insert (client: Client) : Promise<void>
}


@Service()
export class ClientsRepository implements ClientsRepository {
    
    async insert (client : Client): Promise<void> {
        const { name, email, cpf } = client.getInfo();
        const userClient = new ClientTable()
        userClient.name = name
        userClient.cpf = cpf
        userClient.email = email
        await clientRepository.save(userClient)
    }

    static async findById(id : number){
        const client  = await AppDataSource.getRepository(ClientTable).findOneBy({ id })
        
        if(client){
            const teste = Client.create({
                name: client.name,
                cpf: client.cpf,
                email: client.email,
            },
                client.id
            )
        }
    } 


}
