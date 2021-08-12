import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnCpnjTabaleServiceProvider1628731058394
  implements MigrationInterface
{
  name = 'AddColumnCpnjTabaleServiceProvider1628731058394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "cnpj" VARCHAR`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "cnpj"`,
    );
  }
}
