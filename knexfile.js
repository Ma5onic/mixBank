module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/database/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname+"/database/migrations",
    },
    seeds: {
      directory: __dirname+"/database/seeds",
    }
  },
};
