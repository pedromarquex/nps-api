import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('survivors', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.integer('age').unsigned().notNullable();
    table.enum('gender', ['M', 'F']).notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.integer('water').unsigned().notNullable();
    table.integer('soup').unsigned().notNullable();
    table.integer('pouch').unsigned().notNullable();
    table.integer('ak47').unsigned().notNullable();
    table.boolean('infected').unsigned().notNullable().defaultTo(false);
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('survivors');
}
