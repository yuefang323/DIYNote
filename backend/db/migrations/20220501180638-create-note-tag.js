"use strict";

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}; 
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("NoteTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      noteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Notes" },
      },
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Tags" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("NoteTags", options);
  },
};
