import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnComplementAddress1632098015085
  implements MigrationInterface
{
  name = 'AddColumnComplementAddress1632098015085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "address" ADD "complement" VARCHAR NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "complement"`);
  }
}
