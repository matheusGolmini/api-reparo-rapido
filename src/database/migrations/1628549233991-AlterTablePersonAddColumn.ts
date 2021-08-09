import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTablePersonAddColumn1628549233991
  implements MigrationInterface
{
  name = 'AlterTablePersonAddColumn1628549233991';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" ADD "id_html" VARCHAR`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "id_html"`);
  }
}
