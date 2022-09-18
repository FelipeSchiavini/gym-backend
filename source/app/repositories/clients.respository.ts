import { Client } from "../../domain/entities/client.entities";

export interface ClientsRepository {
    findById (id: string): Promise<Client | null>;
}