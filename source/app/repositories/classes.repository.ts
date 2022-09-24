import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Classes } from "../../domain/entities/classes.entities";

export interface ClassesRepository {
    findById (id: string): Promise<Classes | null>;

    linkToTeacher(id: string, teacherId:string): Promise<Classes>;
}

@Entity('classes')
export class ClassTable extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    subject: string

    @Column({ type: 'text' })
    teacherId: string;
}