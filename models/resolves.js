module.exports = (sequelize, type) => {
  return sequelize.define('resolves', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    problem: {
      type: type.STRING
    },
    resolve: {
      type: type.STRING
    },
    rate: {
      type: type.INTEGER
    }
  }, {
    timestamps: false,
    underscored: true
  });
};
