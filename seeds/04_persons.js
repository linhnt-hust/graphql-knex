exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('persons').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('persons').insert([
          {name: "rin", age: 22, gender: "male",created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {name: "rin1", age: 23, gender: "female",created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {name: "rin2", age: 21, gender: "male",created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {name: "rin3", age: 20, gender: "female",created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {name: "rin4", age: 19, gender: "male",created_at: knex.fn.now(), updated_at: knex.fn.now()},
        ]);
      });
  };