"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'NoteTags'; 
    return queryInterface.bulkInsert(options,
      [
        {
          noteId: 1,
          tagId: 1,
        },
        {
          noteId: 2,
          tagId: 1,
        },
        {
          noteId: 4,
          tagId: 1,
        },
        {
          noteId: 5,
          tagId: 1,
        },
        {
          noteId: 5,
          tagId: 2,
        },
        {
          noteId:6 ,
          tagId: 2,
        },
        {
          noteId:8 ,
          tagId: 3,
        },
        {
          noteId:8 ,
          tagId: 4,
        },
        {
          noteId:9 ,
          tagId: 4,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'NoteTags'; 
    return queryInterface.bulkDelete(options, null, {});
  },
};
