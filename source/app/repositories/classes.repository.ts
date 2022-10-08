import { Service } from "typedi";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Classes } from "../../domain/entities/classes.entities";
import { classRepository } from "../../services";

export interface ClassesRepository {
    insert (classes: Classes): Promise<void>;
}


@Service()
export class ClassesRepository implements ClassesRepository {
    
    async insert(classes: Classes): Promise<void>{
        //TODO
    }
}