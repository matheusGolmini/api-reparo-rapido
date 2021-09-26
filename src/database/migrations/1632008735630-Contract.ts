import { MigrationInterface, QueryRunner } from 'typeorm';

export class Contract1632008735630 implements MigrationInterface {
  name = 'Contract1632008735630';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contract" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "approved" boolean NOT NULL, "longDescription" varchar NOT NULL, "briefDescription" varchar NOT NULL, "startDate" varchar NOT NULL, "endDate" varchar NOT NULL, "amountServiceProvider" varchar NOT NULL, "amountTotal" varchar NOT NULL, "amountApp" varchar NOT NULL, "agreement" varchar NOT NULL, "link" varchar NOT NULL, "id_html" varchar, "id_person" uuid, "id_service_provider" uuid, "status" varchar, "id_admin" uuid, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_d9c00852a2371ca71d622172706" FOREIGN KEY ("id_person") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_8c6f64af45ed274ff35887a8928" FOREIGN KEY ("id_service_provider") REFERENCES "service_provider"("id_service_provider") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" ADD CONSTRAINT "FK_918e39b9dd48d211ee027d46598" FOREIGN KEY ("id_admin") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_918e39b9dd48d211ee027d46598"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_8c6f64af45ed274ff35887a8928"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contract" DROP CONSTRAINT "FK_d9c00852a2371ca71d622172706"`,
    );

    await queryRunner.query(`DROP TABLE "contract"`);
  }
}
