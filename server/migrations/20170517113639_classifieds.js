
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', (table) => {
    table.increments().primary()
    table.string("title").notNullable()
    table.string("description").notNullable()
    table.decimal("price").notNullable()
    table.string("item_image").notNullable().defaultTo("https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg")
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds')
};
