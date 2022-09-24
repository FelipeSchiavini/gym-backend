import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Plans } from "../../domain/entities/plans.entities";

export interface PlansRepository {
    findById (id: string): Promise<Plans | null>;
}

@Entity('plans')
export class PlanTable extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: 'text' })
    type:string

    @Column()
    price: number
}