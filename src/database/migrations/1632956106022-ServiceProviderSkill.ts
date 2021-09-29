import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServiceProviderSkill1632956106022 implements MigrationInterface {
  name = 'ServiceProviderSkill1632956106022';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service_provider_skill" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
          "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "deleted_at" TIMESTAMP WITH TIME ZONE, 
          "additional_info" VARCHAR NOT NULL, 
          "start_date" TIMESTAMP WITH TIME ZONE NOT NULL, 
          "id_skill" uuid NOT NULL, 
          "id_service_provider" uuid NOT NULL,
           CONSTRAINT "PK_7a0e695cc0d746d76d94be1d27e" PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider_skill" DROP CONSTRAINT "FK_ab709b573d5f5feab422ccd3def"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider_skill" DROP CONSTRAINT "FK_f5a36876992105bc4e45c994b1b"`,
    );
    await queryRunner.query(`DROP TABLE "service_provider_skill"`);
  }
}
