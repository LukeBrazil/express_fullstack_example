const host  = 'lallah.db.elephantsql.com';
const database = 'fvnbbpvp';
const user = 'fvnbbpvp';
const password = 'MG75ddsTgRIctSnbw7yi5v_7xSvocuQQ';

const pgp = require('pg-promise')({
    query: function(e) {
        console.log('Query: ', e.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options);

module.exports = db;