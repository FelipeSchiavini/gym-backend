import { Entity } from "../../core/domain/entity";

interface ClassesProps {
    subject: string;
} 

export class Classes extends Entity<ClassesProps>{
    
    private constructor(props: ClassesProps, id?:string){
        super(props, id)
    }

    getSubject(): string {
        return this.props.subject
    }

    static create(props: ClassesProps, id?:string){
        const classroom = new Classes(props, id)
        return classroom
    }

}