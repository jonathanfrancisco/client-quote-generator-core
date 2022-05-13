import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('products', (table) => {
    table.integer('clientQuoteCount').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('clientQuoteCount', (table) => {
    table.dropColumn('clientQuoteCount');
  });
}
