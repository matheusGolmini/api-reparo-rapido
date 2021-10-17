import { MigrationInterface, QueryRunner } from 'typeorm';

export class Rating1634489782670 implements MigrationInterface {
  name = 'Rating1634489782670';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "rating" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP WITH TIME ZONE, 
        "id_rated" uuid NOT NULL, 
        "id_rating" uuid NOT NULL, 
        "rating" numeric NOT NULL,
        "id_contract" uuid NOT NULL, 
        CONSTRAINT "PK_661fbe23c8b6158b9fbcecdc6f45" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_bc05d775c7cd3e25cb0eeba62515" FOREIGN KEY ("id_rated") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_0c8495312e4994db4253cffa3c15" FOREIGN KEY ("id_rating") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" ADD CONSTRAINT "FK_1e91b87ffa0856ab2b1912e38845" FOREIGN KEY ("id_contract") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_bc05d775c7cd3e25cb0eeba62515"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_0c8495312e4994db4253cffa3c15"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rating" DROP CONSTRAINT "FK_1e91b87ffa0856ab2b1912e38845"`,
    );
    await queryRunner.query(`DROP TABLE "rating"`);
  }
}
