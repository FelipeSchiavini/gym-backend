import { Teacher } from "../../domain/entities/teacher.entities";

export interface TeacherRepository {
    findById (id: string): Promise<Teacher | null>;
}