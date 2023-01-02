/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments("userId").primary();
    table.string("title");
    table.string("scource");
    table.string("header");
    table.string("mainImage");
    table.string("content1");
    table.string("image1");
    table.string("content2");
    table.string("image2");
    table.string("content3");
    table.string("image3");
    table.string("content4");
    table.string("image4");
    table.string("content5");
    table.string("image5");
    table.string("url");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("articles");
};
