import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsProvider1632591453491 implements MigrationInterface {
  name = 'AddColumnsProvider1632591453491';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "image_document" VARCHAR`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "image_services" VARCHAR array`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "work_places" VARCHAR array`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "account_number" VARCHAR`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "account_number"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "work_places"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "image_services"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "image_document"`,
    );
  }
}
