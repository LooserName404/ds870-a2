"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Patients", [
      {
        name: "Joe John",
        email: "joe@john",
        phone: "+55 (41) 99999-9999",
      },
      {
        name: "John Joe",
        email: "john@joe",
        phone: "+55 (41) 99999-8888",
      },
      {
        name: "Dohn Doe",
        email: "dohn@doe",
        phone: "+55 (41) 99999-7777",
      },
      {
        name: "Doe Dohn",
        email: "doe@dohn",
        phone: "+55 (41) 99999-6666",
      },
      {
        name: "John John",
        email: "john@john",
        phone: "+55 (41) 99999-5555",
      },
      {
        name: "Doe Doe",
        email: "doe@doe",
        phone: "+55 (41) 99999-4444",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Patients", null, {});
  },
};
