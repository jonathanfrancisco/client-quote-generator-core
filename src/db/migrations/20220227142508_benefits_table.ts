import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('benefits', (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.boolean('amount').defaultTo(true);
        table.string('value', 255);
        table.boolean('defaultBenefit').defaultTo(false);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('benefits')
}

