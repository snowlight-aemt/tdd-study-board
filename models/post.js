'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class POST extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  POST.init({
    content: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'POST',
  });
  return POST;
};