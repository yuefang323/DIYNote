'use strict';
module.exports = (sequelize, DataTypes) => {
  const NoteTag = sequelize.define('NoteTag', {
    noteId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tagId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  NoteTag.associate = function(models) {
    NoteTag.belongsTo(models.Tag, {
      foreignKey: "tagId",
    });
    NoteTag.belongsTo(models.Note, {
      foreignKey: "noteId",
    });
  };
  return NoteTag;
};