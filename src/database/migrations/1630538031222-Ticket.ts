import { MigrationInterface, QueryRunner } from 'typeorm';

export class Ticket1630538031222 implements MigrationInterface {
  name = 'Ticket1630538031222';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ticket" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
          "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "deleted_at" TIMESTAMP WITH TIME ZONE, 
          "status" VARCHAR NOT NULL, 
          "description" VARCHAR NOT NULL, 
          "type" VARCHAR NOT NULL, 
          "id_service" uuid, 
          "id_person" uuid, 
          "id_admin" uuid, 
          CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_ed0ac500a61087ed4a7396a4c91"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_660ac2209cced29b1d82ebb79ab"`,
    );
    await queryRunner.query(`DROP TABLE "ticket"`);
  }
}
