const databaseType = process.env.DB_TYPE || 'mongo'

export let models;

if(databaseType === 'mongo'){
    models = require('./mongo/index.js');
} else if (databaseType === 'sql'){

    models = require('./sql/index.js');
} else {

    throw new Error('El modelo no esta declarado');
}

