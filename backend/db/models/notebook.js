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
    Notebook.hasMany(models.Note, {
      foreignKey: "notebookId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Notebook.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Notebook;
};
