import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('test', (table) => {
    table.increments('id').primary();
    table.string('name', 255).nullable();
    table.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test');
}
