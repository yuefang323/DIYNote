"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "NoteTags",
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
    return queryInterface.bulkDelete("NoteTags", null, {});
  },
};
