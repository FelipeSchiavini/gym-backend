import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../domain/entities/client.entities";
import { AppDataSource } from "../../services";
import { PlanTable } from "./plans.repository";

export interface ClientsRepository {
    findById (id: number): Promise<Client | null>;
    insert (client: Client) : Promise<void>
}

export class ClientsRepository implements ClientsRepository {
    
    static async insert (client : Client): Promise<void> {
        const { name, email, cpf } = client.getInfo();
        //id, planId 
        const userClient = new ClientTable()
        userClient.name = name
        userClient.cpf = cpf
        userClient.email = email
        await AppDataSource.getRepository(ClientTable).save(userClient)
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

@Entity('clients')
export class ClientTable {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    cpf: string;

    @Column({ type: 'text', nullable: true })
    email: string;

//    @ManyToOne(() => PlanTable, plan => plan.id)
//    @JoinColumn({name: 'plan_id' })
//    planId: string; 
}