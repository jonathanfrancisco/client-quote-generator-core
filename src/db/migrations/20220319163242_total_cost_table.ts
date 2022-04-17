import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('total_costs', (table) => {
    table.uuid('id').primary().unsigned();
    table
      .uuid('clientQuoteId')
      .unsigned()
      .index()
      .references('id')
      .inTable('client_quotes')
      .onDelete('cascade')
      .onUpdate('cascade'),
      table.float('annual'),
      table.float('semi'),
      table.float('quarterly'),
      table.float('monthly');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('total_costs');
}
