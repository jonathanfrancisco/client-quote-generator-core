import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product_benefits', (table) => {
    table.uuid('id').primary().unsigned();
    table.string('type', 255).notNullable();
    table
      .uuid('productId')
      .unsigned()
      .index()
      .references('id')
      .inTable('products')
      .onDelete('cascade')
      .onUpdate('cascade');
    table
      .uuid('benefitId')
      .unsigned()
      .index()
      .references('id')
      .inTable('benefits')
      .onDelete('cascade')
      .onUpdate('cascade');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('product_benefits');
}
