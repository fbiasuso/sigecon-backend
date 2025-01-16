/* import { Customer } from "../../models/customerSchema.js"; */
import { Customer } from "../../models/index.js";
import { CustomerRepository } from "../CustomersRepository.js";

export class CustomerMongoRepository extends CustomerRepository{
    async  create (data) {
        const customer = new Customer(data);
        
        return await customer.save();
    }

    async  findById (id) {
                
        return await Customer.findById(id);
    }

    async  findAll () {
                
        return await Customer.find();

    }

    async  update (id, data) {
                
        return await Customer.findByIdAndUpdate(id, data, {new: true});
    }

    async  delete(id) {
                
        return await Customer.findByIdAndDelete(id);
    }

}