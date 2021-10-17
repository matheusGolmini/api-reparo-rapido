import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsRatingPerson1634490635607 implements MigrationInterface {
  name = 'AddColumnsRatingPerson1634490635607';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" ADD "rating" numeric`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "rating"`);
  }
}
