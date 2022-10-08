import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('clients')
export class ClientTable  {

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

