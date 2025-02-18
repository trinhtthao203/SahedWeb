module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define(
    "Images",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Tự động tăng
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false, // URL không được null
      },
      category: {
        // Phân loại
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        // Thứ tự
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Mặc định là 0 nếu không có giá trị
      },
    },
    {
      timestamps: true, // Tạo trường createdAt và updatedAt
      createdAt: "createdAt", // Trường ngày tạo
      updatedAt: "updatedAt", // Trường ngày cập nhật
    }
  );

  return Images;
};
