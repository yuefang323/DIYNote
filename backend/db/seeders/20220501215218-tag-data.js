"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          name: "beauty",
          userId: 1,
        },
        {
          name: "important",
          userId: 1,
        },
        {
          name: "something-new",
          userId: 2,
        },
        {
          name: "design",
          userId: 2,
        },
        {
          name: "IMPT",
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
