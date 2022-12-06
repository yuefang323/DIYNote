"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Notebooks'; 
    return queryInterface.bulkInsert(options,
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
    options.tableName = 'Notebooks';
    return queryInterface.bulkDelete(options, null, {});
  },
};
