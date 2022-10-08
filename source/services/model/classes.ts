import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('classes')
export class ClassTable {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    subject: string

    @Column({ type: 'text' })
    teacherId: string;
}