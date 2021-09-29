import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsIdPersonToken1632790803709
  implements MigrationInterface
{
  name = 'AddColumnsIdPersonToken1632790803709';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "token" ADD "idPerson" uuid`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "token" DROP COLUMN "idPerson"`);
  }
}
