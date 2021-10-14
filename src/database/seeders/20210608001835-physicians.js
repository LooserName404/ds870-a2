"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Physicians", [
      {
        name: "John Doe",
        email: "john@doe.com",
        password: "foobar",
      },
      {
        name: "Don Jhoe",
        email: "don@jhoe.com",
        password: "boofar",
      },
      {
        name: "Doe John",
        email: "doe@john.com",
        password: "raboof",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Physicians", null, {});
  },
};
