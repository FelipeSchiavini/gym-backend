import { ClassesRepository } from "../../app/repositories/classes.repository";
import { Classes } from "../../domain/entities/classes.entities";

export class InMemoryClassesRepository implements ClassesRepository{
    public classesList: Classes[] = []
    
    async findById(id: string): Promise<Classes | null> {
        const classes = this.classesList.find(c => c.id === id)
        
        if (!classes) {
            return null
        }  
        return classes;  
    };

    async linkToTeacher(id: string, teacherId:string) {
        console.log('entrou')
        const classes = this.classesList.find(c => c.id === id)
        console.log('1', classes)
        if (!classes) throw Error ('Class does not exist!')
        classes?.setTeacherId(teacherId)
        console.log(`Conection Done: ${id}, ${teacherId}`)
        return classes
    };


}