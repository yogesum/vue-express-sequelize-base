module.exports = {
  development: {
    username: 'root',
    password: 'yeda123',
    database: 'maindb_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStoragePath: 'sequelize',
  },
  test: {
    username: 'root',
    password: null,
    database: 'maindb_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'maindb_prod',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStoragePath: 'sequelize',
  },
}[process.env.NODE_ENV || 'development'];
