const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const sequelize = require('../../db');

const { DataTypes } = Sequelize;

class User extends Sequelize.Model {
  static associate() {
    this.belongsTo(this, { as: 'creater', foreignKey: 'createdBy' });
    this.belongsTo(this, { as: 'updater', foreignKey: 'updatedBy' });
    this.belongsTo(this, { as: 'deleter', foreignKey: 'deletedBy' });
  }

  static async getHash(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  static async hashPassword(user) {
    if (user.changed('password')) {
      user.set('password', await this.getHash(user.password));
    }
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  phoneNumber: DataTypes.STRING(20),
  password: DataTypes.CHAR(60).BINARY,
}, { sequelize, paranoid: true });

User.beforeSave(User.hashPassword);
