import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServiceProvider1627522410601 implements MigrationInterface {
  name = 'ServiceProvider1627522410601';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service_provider" (
        "id_person_approver" uuid, 
        "approved" boolean NOT NULL DEFAULT false, 
        "join_date" date, "id_service_provider" uuid NOT NULL, 
        CONSTRAINT "REL_239bfe569a81f1bc825c505de0" UNIQUE ("id_service_provider"), 
        CONSTRAINT "PK_239bfe569a81f1bc825c505de03" PRIMARY KEY ("id_service_provider"))`,
    );

    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD CONSTRAINT "FK_239bfe569a81f1bc825c505de03" FOREIGN KEY ("id_service_provider") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD CONSTRAINT "FK_10b5f2b26ca01abf71e9108a988" FOREIGN KEY ("id_person_approver") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP CONSTRAINT "FK_10b5f2b26ca01abf71e9108a988"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP CONSTRAINT "FK_239bfe569a81f1bc825c505de03"`,
    );

    await queryRunner.query(`DROP TABLE "service_provider"`);
  }
}
