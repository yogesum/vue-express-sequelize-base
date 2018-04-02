## Vue Express Sequelize base

### Prerequisite
- **Node.js:** `>=8.4.0` and **npm:** `>=5.3.0`
- **MySQL|MariaDB:** `>=5.7.0`

### Configure
For application config use [node-config](https://github.com/lorenwest/node-config) with [toml](https://github.com/toml-lang/toml) files

create *`config/local-development.toml`* for development config
```toml
# config/local-development.toml
env = "development"

[db]
username = "dbuser"
password = "dbpass"
database = "dbname"
```

### Development
```sh
# install dependencies
npm install
# create database table and seed with data
npm run migration

# run development server
npm run dev

# for debugging
npm run dev:inspect

```

- Open http://127.0.0.1:3000 in browser
- Available application **[components](server/components/README.md)**

### Migrations
Sequelize cli is used to generate migrations and seeder files

- **create database:** `./node_modules/.bin/sequelize db:create`
- Auto generate model and migration file
```bash
# Generate Task model
mkdir server/api/task

./node_modules/.bin/sequelize model:generate\
  --models-path server/api/task --name Task\
  --attributes name:STRING,description:TEXT,startAt:DATE,endAt:DATE,completedAt:DATE
```
- **Run migration:** `./node_modules/.bin/sequelize db:migrate`
- for more [see this](http://docs.sequelizejs.com/manual/tutorial/migrations.html)


### References

1. [Nuxt.js](https://nuxtjs.org/) - server-side rendering
2. [Element-UI](http://element.eleme.io/#/en-US/component/installation) - ui library
3. [Sequelize](https://github.com/sequelize/sequelize) - mysql orm
4. [Passport.js](http://passportjs.org/) - authentication library
5. [node-config](https://github.com/lorenwest/node-config) - application configuration
6. [TOML](https://github.com/toml-lang/toml) - configuration files
