exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('email', 128).notNullable();
            tbl.string('password', 128).notNullable();
        })

};

exports.down = function (knex) {
    // drop in the opposite order
    return knex.schema
        .dropTableIfExists('users')
};