import { Classes } from "../../../domain/entities/classes.entities";
import { Teacher } from "../../../domain/entities/teacher.entities";
import { InMemoryClassesRepository } from "../../../tests/repositories/classes.in-memories";
import { InMemoryTeacherRepository } from "../../../tests/repositories/teachers.in-memories";
import { LinkTeacherToClass } from "./link-teacher-to-class";

describe('Link teacher with his class', () => {
    it('creating link', async () =>{
        const classesRepository = new InMemoryClassesRepository();
        const teacherRepository = new InMemoryTeacherRepository();

        const ballet = Classes.create({
            subject: 'ballet'
        })
        const teacher = Teacher.create({
            name: 'name',
            cpf: '999.999.999-99',
            email: 'email@email.com'
        })
        
        classesRepository.classesList.push(ballet)
        teacherRepository.teacherList.push(teacher)

        const link = new LinkTeacherToClass(classesRepository, teacherRepository);

        const newBallet = await link.exec({
            classId: ballet.id,
            teacherId:teacher.id 
        }) as Classes

        expect(newBallet.getTeacherId()).toBe(teacher.id)

    })
})