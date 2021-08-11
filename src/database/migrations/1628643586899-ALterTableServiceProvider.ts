import { MigrationInterface, QueryRunner } from 'typeorm';

export class ALterTableServiceProvider1628643586899
  implements MigrationInterface
{
  name = 'ALterTableServiceProvider1628643586899';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" ADD "description_not_approved" VARCHAR`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service_provider" DROP COLUMN "description_not_approved"`,
    );
  }
}
