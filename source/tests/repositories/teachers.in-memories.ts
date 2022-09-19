import { TeacherRepository } from "../../app/repositories/teacher.repository";
import { Teacher } from "../../domain/entities/teacher.entities";

export class InMemoryTeacherRepository implements TeacherRepository{
    public teacherList: Teacher[] = []
    
    async findById(id: string): Promise<Teacher | null> {
        const teacher = this.teacherList.find(c => c.id === id)
        
        if (!teacher) {
            return null
        }
        
        return teacher;  
    }

    async insert (teacher: Teacher) {
        console.log(`InMemories: Client inserted in database name: ${teacher.getName()}`)
    }
}