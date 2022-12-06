"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Tags';
    return queryInterface.bulkInsert(options,
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
    options.tableName = 'Tags';
    return queryInterface.bulkDelete(options, null, {});
  },
};
