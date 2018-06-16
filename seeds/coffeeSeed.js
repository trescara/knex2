const coffee = require('../coffee');
exports.seed = function (knex, Promise) {
  return knex.raw('DELETE FROM "coffeetable"; ALTER SEQUENCE coffeetable_id_seq RESTART WITH 4; ')
    .then(function () {
      return knex('coffeetable').insert(coffee)
    });
};


