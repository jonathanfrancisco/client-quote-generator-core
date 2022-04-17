import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('client_benefits', (table) => {
    table.uuid('id').primary().unsigned();
    table
      .uuid('benefitId')
      .unsigned()
      .index()
      .references('id')
      .inTable('benefits')
      .onDelete('cascade')
      .onUpdate('cascade'),
      table.string('type', 255).notNullable(),
      table
        .uuid('clientQuoteId')
        .unsigned()
        .index()
        .references('id')
        .inTable('client_quotes')
        .onDelete('cascade')
        .onUpdate('cascade');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('client_benefits');
}
