import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('client_quotes', (table) => {
    table.uuid('id').primary().unsigned();
    table
      .uuid('clientId')
      .unsigned()
      .index()
      .references('id')
      .inTable('clients')
      .onDelete('cascade')
      .onUpdate('cascade');
    table
      .uuid('productId')
      .unsigned()
      .index()
      .references('id')
      .inTable('products')
      .onDelete('cascade')
      .onUpdate('cascade'),
      table.string('additionalComment', 255),
      table.string('paymentMethod', 255);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('client_quotes');
}
