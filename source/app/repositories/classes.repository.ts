import { Classes } from "../../domain/entities/classes.entities";

export interface ClassesRepository {
    findById (id: string): Promise<Classes | null>;

    linkToTeacher(id: string, teacherId:string): Promise<Classes>;
}