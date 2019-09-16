
exports.seed = function (knex) {

  return knex('users').insert([
    { email: 'duran@gmail.com', password: '123456' }
  ]);
};
