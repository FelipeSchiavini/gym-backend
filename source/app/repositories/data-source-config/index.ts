import { DataSource } from "typeorm";
import { ClassTable } from "../classes.repository";
import { ClientTable } from "../clients.respository";
import { PlanTable } from "../plans.repository";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [ ClassTable, ClientTable, PlanTable ],
    migrations: [`${__dirname}/**/migration/*.{ts,js}`],

    //entities: [`${__dirname}/**/entities/*.{ts,js}`]
})