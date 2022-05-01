"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
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
  Tag.associate = function (models) {
    Tag.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Tag.hasMany(models.NoteTag, {
      foreignKey: "tagId",
    });
    Tag.belongsToMany(models.Note, {
      foreignKey: "tagId",
      through: "NoteTag",
      otherKey: "noteId",
    });
  };
  return Tag;
};
