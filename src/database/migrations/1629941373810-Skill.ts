import { MigrationInterface, QueryRunner } from 'typeorm';

export class Skill1629941373810 implements MigrationInterface {
  name = 'Skill1629941373810';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "skill" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
          "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
          "deleted_at" TIMESTAMP WITH TIME ZONE, 
          "name"VARCHAR NOT NULL, 
          "description"VARCHAR NOT NULL, 
          "image_url"VARCHAR NOT NULL, 
          CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "skill"`);
  }
}
