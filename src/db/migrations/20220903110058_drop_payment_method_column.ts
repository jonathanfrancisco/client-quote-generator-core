import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('client_quotes', (table) => {
    table.dropColumn('paymentMethod');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('client_quotes', (table) => {
    table.string('paymentMethod', 255);
  });
}
