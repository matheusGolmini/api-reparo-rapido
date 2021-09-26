import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnImageProfilePerson1632098392653
  implements MigrationInterface
{
  name = 'AddColumnImageProfilePerson1632098392653';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" ADD "image_profile" VARCHAR NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "image_profile"`);
  }
}
