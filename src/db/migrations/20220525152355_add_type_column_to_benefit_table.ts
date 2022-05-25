import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('benefits', (table) => {
    table.string('type');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('benefits', (table) => {
    table.dropColumn('type');
  });
}
