"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notebooks",
      [
        {
          name: "DIY Dress",
          userId: 1,
        },
        {
          name: "Hair Style",
          userId: 1,
        },
        {
          name: "TO-do-list",
          userId: 1,
        },
        {
          name: "My First Notebook",
          userId: 2,
        },
        {
          name: "Web-design-ideas",
          userId: 2,
        },
        {
          name: "Important Dates",
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
