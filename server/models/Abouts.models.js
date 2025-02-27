module.exports = (sequelize, DataTypes) => {
  const Abouts = sequelize.define("About", {
    content: {
      type: DataTypes.TEXT("long"), // Lưu nội dung HTML dài
      allowNull: false,
    },
  });
  return Abouts;
};
