import { MigrationInterface, QueryRunner } from 'typeorm';

export class Person1627522391723 implements MigrationInterface {
  name = 'Person1627522391723';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP WITH TIME ZONE, 
        "first_name" varchar NOT NULL, 
        "last_name" varchar NOT NULL, 
        "email" varchar NOT NULL, 
        "phone" varchar NOT NULL, 
        "password" varchar NOT NULL, 
        "cpf" varchar NOT NULL, 
        "rg" varchar NOT NULL, 
        "sex" varchar NOT NULL, 
        "is_admin" boolean NOT NULL DEFAULT false, 
        CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "person"`);
  }
}
