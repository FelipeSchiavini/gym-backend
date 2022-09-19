import { ClassesRepository } from "../../repositories/classes.repository";
import { TeacherRepository } from "../../repositories/teacher.repository";


interface LinkTeacherToClassRequest {
    classId: string;
    teacherId: string;
}

export class LinkTeacherToClass {
    constructor(
        private classesRepository: ClassesRepository,
        private teacherRepository: TeacherRepository
        ) {
    }

    async exec({classId, teacherId}: LinkTeacherToClassRequest){
        
        const teacher = await this.teacherRepository.findById(teacherId)
        const classromm = await this.classesRepository.findById(classId)

        if(teacher && classromm){
            return this.classesRepository.linkToTeacher(classId, teacherId)
        }

        return null
    }
}