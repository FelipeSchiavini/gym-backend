import { MigrationInterface, QueryRunner } from "typeorm";

export class default1665014762573 implements MigrationInterface {
    name = 'default1665014762573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" text NOT NULL, "cpf" text NOT NULL, "email" text, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
