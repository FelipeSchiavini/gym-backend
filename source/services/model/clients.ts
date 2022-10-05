import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ClientControllerInput } from "../../app/controllers/client.model";


@Entity('clients')
export class ClientTable  {



    ///constructor(name: string, cpf: string, email: string){
    ///    this.name = name
    ///    this.cpf = cpf
    ///    this.email = email
    ///}

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text' })
    cpf: string;

    @Column({ type: 'text', nullable: true })
    email: string;

    //@ManyToOne(() => PlanTable, plan => plan.id)
    //@JoinColumn({name: 'plan_id' })
    //planId: string; 
}

