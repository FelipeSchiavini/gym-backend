import { Teacher } from "../../domain/entities/teacher.entities";

export interface ClientsRepository {
    findById (id: string): Promise<Teacher | null>;
}