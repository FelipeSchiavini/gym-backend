import { Classes } from "../../domain/entities/classes.entities";

export interface ClassesRepository {
    findById (id: string): Promise<Classes | null>;
}