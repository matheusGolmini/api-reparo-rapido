import { MigrationInterface, QueryRunner } from 'typeorm';

export class PersonBlocked1628375795890 implements MigrationInterface {
  name = 'PersonBlocked1628375795890';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person_blocked" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP WITH TIME ZONE, 
        "blocker_description" VARCHAR NOT NULL, 
        "unlock_description" VARCHAR, 
        "id_person" uuid NOT NULL, 
        "id_person_blocker" uuid NOT NULL, 
        "id_person_unlocker" uuid, 
        "is_blocked" boolean NOT NULL DEFAULT true, 
        CONSTRAINT "PK_661fbe23c8b6158b9fbcecdc6f4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" ADD CONSTRAINT "FK_bc05d775c7cd3e25cb0eeba6251" FOREIGN KEY ("id_person") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" ADD CONSTRAINT "FK_0c8495312e4994db4253cffa3c1" FOREIGN KEY ("id_person_blocker") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" ADD CONSTRAINT "FK_1e91b87ffa0856ab2b1912e3884" FOREIGN KEY ("id_person_unlocker") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person_blocked" DROP CONSTRAINT "FK_1e91b87ffa0856ab2b1912e3884"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" DROP CONSTRAINT "FK_0c8495312e4994db4253cffa3c1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_blocked" DROP CONSTRAINT "FK_bc05d775c7cd3e25cb0eeba6251"`,
    );
    await queryRunner.query(`DROP TABLE "person_blocked"`);
  }
}
