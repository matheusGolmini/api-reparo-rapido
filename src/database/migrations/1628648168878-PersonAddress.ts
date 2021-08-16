import { MigrationInterface, QueryRunner } from 'typeorm';

export class PersonAddress1628648168878 implements MigrationInterface {
  name = 'PersonAddress1628648168878';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person_address" (
          "id_person" uuid NOT NULL, 
          "id_address" uuid NOT NULL, 
          CONSTRAINT "PK_a1232f8af499b5702a1687eb6f4" 
          PRIMARY KEY ("id_person", "id_address"))`,
    );

    await queryRunner.query(
      `ALTER TABLE "person_address" ADD CONSTRAINT "FK_26229350d2863f3215f300a1b08" FOREIGN KEY ("id_person") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_address" ADD CONSTRAINT "FK_6d2c66126964b20c7121bbf0175" FOREIGN KEY ("id_address") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person_address" DROP CONSTRAINT "FK_6d2c66126964b20c7121bbf0175"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_address" DROP CONSTRAINT "FK_26229350d2863f3215f300a1b08"`,
    );
    await queryRunner.query(`DROP TABLE "person_address"`);
  }
}
