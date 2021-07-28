import { MigrationInterface, QueryRunner } from 'typeorm';

export class Token1627508611411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "token"(
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "hash" varchar(255) NOT NULL,
            "email" varchar(100) NOT NULL,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
            "deleted_at" TIMESTAMP WITH TIME ZONE,
            CONSTRAINT "pk_token" PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "token"');
  }
}
