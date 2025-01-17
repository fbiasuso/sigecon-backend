import { CustomerMongoRepository } from "./mongo/CustomerMongoRepository.js";
import { CustomerSQLRepository } from "./sql/CustomerSQLRepository.js";

const databaseType = process.env.DB_TYPE || 'mongo';

export let customerRepository;

if (databaseType === 'mongo') {
    
    customerRepository = new CustomerMongoRepository();
    
} else if (databaseType === 'sql'){
    
    customerRepository = new CustomerSQLRepository();

} else {

    throw new Error('Tipo de base de datos no soportado');

}