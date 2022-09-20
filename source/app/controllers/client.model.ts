import { IsEmail, IsString } from 'class-validator';
import { IsCPF } from 'brazilian-class-validator';

export class ClientControllerInput {
    @IsString()
    name!: string;

    @IsCPF()
    cpf: string;

    @IsEmail()
    email: string;
    
}