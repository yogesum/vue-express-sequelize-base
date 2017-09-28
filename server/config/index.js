export default {
  development: {
    username: 'root',
    password: null,
    database: 'maindb_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
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
  },
}[process.env.NODE_ENV || 'development'];
