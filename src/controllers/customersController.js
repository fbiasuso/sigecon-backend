import { customerRepository } from "../repositories/index.js"



export const createCustomer = async (req, res) => {
      
    try {
        const data =  req.body; 
        const newCustomer = await customerRepository.create(data);
        res.status(201).json(newCustomer);
        
    } catch (error) {
        console.error('Error al crear al cliente', error.message);
        res.status(500).json({message:'Error al crear al cliente'});
    }
};

export const getAllCustomers = async (req, res) => {
      
    try {
        const customer = await customerRepository.findAll();
        res.status(200).json(customer);
                
    } catch (error) {
        console.error('Error al obtener los clientes', error.message);
        res.status(500).json({message:'Error al obteer los cliente'});
    }
};