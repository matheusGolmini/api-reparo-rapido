import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateContract1633483138907 implements MigrationInterface {
  name = 'UpdateContract1633483138907';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contract" ADD "terminated_service_provider" boolean`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contract" DROP COLUMN "terminated_service_provider"`,
    );
  }
}
