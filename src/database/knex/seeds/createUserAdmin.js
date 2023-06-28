const { hash } = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "admin",
      email: "admin@legal.com",
      password: await hash("333333", 8),
      isAdmin: true,
    },
  ]);
};