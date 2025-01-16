import { CustomerMongoRepository } from "./mongo/CustomerMongoRepository";
import { CustomerSQLRepository } from "./sql/CustomersqlRepository";

const databaseType = process.env.DB_TYPE || 'mongo';

export let CustomerRepository;

if (databaseType === 'mongo') {
    
    CustomerRepository = new CustomerMongoRepository();
    
} else if (databaseType === 'sql'){
    
    CustomerRepository = new CustomerSQLRepository();

} else {

    throw new Error('Tipo de base de datos no soportado');

}