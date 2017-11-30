import Sequelize from 'sequelize';

import config from '../config';

const define = { freezeTableName: true };
const sequelize = new Sequelize(Object.assign({ define }, config));

Object.getPrototypeOf(sequelize).setup = function setup() {
  [...Object.entries(this.models)].forEach((model) => {
    if ('associate' in model) model.associate(this.models);
  });
};

export default sequelize;
