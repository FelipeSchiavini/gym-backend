import { ClientsRepository } from "../../app/repositories/clients.respository";
import { Client } from "../../domain/entities/client.entities";

export class InMemoryClientsRepository implements ClientsRepository{
    public clientsList: Client[] = []
    
    async findById(id: string): Promise<Client | null> {
        const client = this.clientsList.find(c => c.id)
        
        if (!client) {
            return null
        }
        
        return client;
    }
}