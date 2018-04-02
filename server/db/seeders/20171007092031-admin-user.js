module.exports = {
  up(db) {
    return db.bulkInsert('User', [{
      firstName: 'Super',
      lastName: 'Admin',
      email: 'yogesum@gmail.com',
      phoneNumber: '+917666769550',
      password: '$2a$10$VIDdkh5ojwdPxIW.PJSYhuyg7Gf17ake.aL5ezseOThKsaIqmAlxS', // SuperAdmin
      creatorId: 1,
      updaterId: 1,
    }], {})
  },

  down(db) {
    return db.bulkDelete('User', null, {})
  },
}

