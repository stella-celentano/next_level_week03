import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602613565525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZA AS ALTERAÇÕES (criar tabela, criar um campo, apagar etc)
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // não permite valores negativos
                    isPrimary: true,
                    isGenerated: true, // vai ser gerada automaticamente
                    generationStrategy: 'increment' // incremental, autoincrement
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // números depois da vírgula
                    precision: 2, // números antes da vírgula

                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // números depois da vírgula
                    precision: 2, // números antes da vírgula
                    
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                }, 
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DEAFAZER O QUE FOI FEITO NO UP (caso algo dê errado, esse método deve fazer o contrário do que foi feito no UP)
        await queryRunner.dropTable('orphanages');
    }

}
