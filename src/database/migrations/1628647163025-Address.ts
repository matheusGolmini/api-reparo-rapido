import { MigrationInterface, QueryRunner } from 'typeorm';

export class Address1628647163025 implements MigrationInterface {
  name = 'Address1628647163025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
          "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "deleted_at" TIMESTAMP WITH TIME ZONE, 
          "country" VARCHAR NOT NULL, 
          "state" VARCHAR NOT NULL, 
          "city" VARCHAR NOT NULL, 
          "region" VARCHAR NOT NULL, 
          "street" VARCHAR NOT NULL, 
          "type" VARCHAR NOT NULL, 
          "zip" VARCHAR NOT NULL, 
          "number" VARCHAR,
          CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
