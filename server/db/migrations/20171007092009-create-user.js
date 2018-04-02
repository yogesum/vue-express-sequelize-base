module.exports = {
  up: (db, Sequelize) => db
    .createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
      },
      password: {
        type: Sequelize.CHAR(60).BINARY,
      },
      creatorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
      updaterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
      deleterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    }),

  down: db => db.dropTable('User'),
}

