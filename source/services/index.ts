import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [`${__dirname}/**/model/*.{ts,js}`],
    migrations: [`${__dirname}/../**/migrations/*.{ts,js}`],
    migrationsTableName: "custom_migration_table",
})
