exports.up = function(knex, Promise) {
        return knex.schema.createTable('reviews', table => {
                table.increments();
                table.integer('user_id')
                        .references('id')
                        .inTable('users')
                        .onDelete('cascade')
                        .notNullable();
                table.integer('resource_id')
                        .references('id')
                        .inTable('users')
                        .onDelete('cascade')
                        .notNullable();
                table.string('content').notNullable();
                table.integer('rating').notNullable();
                table.timestamps(true, true);
        });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('reviews');
};
