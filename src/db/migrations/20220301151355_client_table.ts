import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('clients', (table) => {
    table.uuid('id').primary().unsigned();
    table.string('name', 255).notNullable();
    table.string('gender', 255).notNullable();
    table.date('birthday');
    table.integer('age');
    table.string('smokingHabit', 255).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('clients');
}
