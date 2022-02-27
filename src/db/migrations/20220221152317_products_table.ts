import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', (table) => {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('category', 255).notNullable();
        table.string('description', 1000).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

