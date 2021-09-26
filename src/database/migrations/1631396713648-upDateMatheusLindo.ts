import { MigrationInterface, QueryRunner } from 'typeorm';

export class upDateMatheusLindo1631396713648 implements MigrationInterface {
  name = 'upDateMatheusLindo1631396713648';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ticket" ADD "id_html" varchar`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ticket" DROP COLUMN "id_html"`);
  }
}
