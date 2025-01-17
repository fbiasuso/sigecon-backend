const databaseType = process.env.DB_TYPE || 'mongo'

let models;

if(databaseType === 'mongo'){
    models = await import('./mongo/index.js');
} else if (databaseType === 'sql'){

    models = await import('./sql/index.js');
} else {

    throw new Error('El modelo no esta declarado');
}

export default models;

