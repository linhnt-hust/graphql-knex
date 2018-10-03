
exports.up = function(knex, Promise) {
    return knex.schema.createTable('persons', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.int('age');
        table.string('gender');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('persons');
};
