const knex = require("./database-connection");

module.exports = {
    list() {
        return knex('coffeetable')
            .select();
    },
    read(id) {
        return knex('coffeetable')
            .select()
            .where('id', id)
            .first();
    },
    create(resolution) {
        return knex('coffeetable')
            .insert(resolution)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, resolution) {
        return knex('coffeetable')
            .where('id', id)
            .update(resolution)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id) {
        return knex('coffeetable').delete().where("id", id);
    }

};
