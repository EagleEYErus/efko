module.exports = (sequelize, type) => {
  return sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    username: {
      type: type.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: type.STRING,
      allowNull: false
    },
    root: {
      type: type.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    underscored: true
  });
};
