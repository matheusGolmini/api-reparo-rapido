import { MigrationInterface, QueryRunner } from 'typeorm';

export class PersonBlocked1628374864808 implements MigrationInterface {
  name = 'PersonBlocked1628374864808';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person_blocked" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "description" character varying NOT NULL, "id_person" uuid NOT NULL, "is_blocked" uuid NOT NULL DEFAULT true, CONSTRAINT "PK_661fbe23c8b6158b9fbcecdc6f4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" ADD CONSTRAINT "FK_bc05d775c7cd3e25cb0eeba6251" FOREIGN KEY ("id_person") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "person_blocked"`);
  }
}
