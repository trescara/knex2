const fake = require('../coffee');
exports.seed = function (knex, Promise) {
  return knex.raw('DELETE FROM "faketb"; ALTER SEQUENCE faketb_id_seq RESTART WITH 4; ')
    .then(function () {
      return knex('faketb').insert(fake)
    });
};


