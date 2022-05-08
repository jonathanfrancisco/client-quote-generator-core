import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('client_benefits', (table) => {
    table.string('amount');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('client_benefits', (table) => {
    table.dropColumn('amount');
  });
}
