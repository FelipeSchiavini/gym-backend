import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "../../domain/entities/client.entities";
import { PlanTable } from "./plans.repository";

export interface ClientsRepository {
    findById (id: string): Promise<Client | null>;
    insert (client: Client) : void
}

@Entity('clients')
export class ClientTable extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    cpf: string;

    @Column({ type: 'text', nullable: true })
    email: string;

    @ManyToOne(() => PlanTable, plan => plan.id)
    @JoinColumn({name: 'plan_id' })
    planId: string; 
}