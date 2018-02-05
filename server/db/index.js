const Sequelize = require('sequelize');

const config = require('../config');

const define = { freezeTableName: true };
const sequelize = new Sequelize({
  define,
  ...config,
  operatorsAliases: false,
});

Object.getPrototypeOf(sequelize).setup = function setup() {
  [...Object.entries(this.models)].forEach((model) => {
    if ('associate' in model) model.associate(this.models);
  });
};

module.exports = sequelize;
