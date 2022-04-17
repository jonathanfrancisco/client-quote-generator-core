import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('prospects', (table) => {
    table.increments('id').primary();
    table.string('fullname', 255).notNullable();
    table.string('gender', 255).notNullable();
    table.date('birthday').notNullable();
    table.string('smoking_habit', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('prospects');
}
