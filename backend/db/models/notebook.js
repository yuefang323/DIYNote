"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define(
    "Notebook",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Notebook.associate = function (models) {
    Notebook.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Notebook.hasMany(models.Note, {
      foreignKey: "notebookId",
    });
  };
  return Notebook;
};
