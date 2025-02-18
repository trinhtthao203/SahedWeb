module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "Posts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Tự động tăng
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortContent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Mặc định là thời gian hiện tại
      },
    },
    {
      timestamps: true, // Tự động tạo trường createdAt và updatedAt
      createdAt: "createdAt", // Đảm bảo tên trường là 'createdAt'
      updatedAt: false, // Nếu không cần trường 'updatedAt'
    }
  );

  return Posts;
};
