import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable(); //Que dia da semana
    table.integer('from').notNullable(); //Que horas eu começo
    table.integer('to').notNullable(); //Que horas eu termino

    table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
