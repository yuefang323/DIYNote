"use strict";
module.exports = (sequelize, DataTypes) => {
  const NoteTag = sequelize.define(
    "NoteTag",
    {
      noteId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Notes" },
      },
      tagId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Tags" },
      },
    },
    {}
  );
  NoteTag.associate = function (models) {
    NoteTag.belongsTo(models.Note, {
      foreignKey: "noteId",
    });
    NoteTag.belongsTo(models.Tag, {
      foreignKey: "tagId",
    });
  };
  return NoteTag;
};
