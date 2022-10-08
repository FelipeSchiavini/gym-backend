import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('plans')
export class PlanTable {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: 'text' })
    type:string

    @Column()
    price: number
}