'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    notebookId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Notebooks" },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Note.belongsTo(models.Notebook, {
      foreignKey: "notebookId",
    });
  };
  return Note;
};