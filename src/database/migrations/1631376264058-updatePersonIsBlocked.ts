import {MigrationInterface, QueryRunner} from "typeorm";

export class updatePersonIsBlocked1631376264058 implements MigrationInterface {
    name = 'updatePersonIsBlocked1631376264058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "is_blocked" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "is_blocked"`);
    }

}
