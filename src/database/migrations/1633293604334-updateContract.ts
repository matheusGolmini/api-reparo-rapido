import {MigrationInterface, QueryRunner} from "typeorm";

export class updateContract1633293604334 implements MigrationInterface {
    name = 'updateContract1633293604334'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "contract" ADD "pago" varchar`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contract" DROP COLUMN "pago"`);
    }

}
