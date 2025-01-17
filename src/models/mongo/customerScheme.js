import mongoose from "mongoose";

/* const AddressSchema = mongoose.Schema({
            street: {type: String, trim: true},
            city: {type: String, trim: true},
            department: {type: String, trim: true},
            state: {type: String, trim: true},
            zip: {type: String, trim: true},
  }); */


const customerSchema = new mongoose.Schema(
    {
        /* name: {type: String, required: true, trim: true },
        cuit: {type: String, required: false, trim: true },
        password: {type: String, required: false, trim: true } */

        name: {type: String, required: true, trim: true },
        cuit: {type: String, required: false, trim: true },
        password: {type: String, required: false, trim: true },
        legal_status:{type: String, required: true, trim: true },
        legal_rol: {type: String, required: true, trim: true },
        representative:[{
            name: {type: String, required: false, trim: true },
            cuit: {type: String, required: false, trim: true },
            legal_status:{type: String, required: false, trim: true }
        }],
        address: [{
            street: {type: String, trim: true},
            city: {type: String, trim: true},
            department: {type: String, trim: true},
            state: {type: String, trim: true},
            zip: {type: String, trim: true}
        }],
        services: [{
            name: {type: String, required: false, trim: true}
        }],
        isActive: {type: Boolean, default: true}
    },
        {timestamps: true});

export const Customer = mongoose.model('Customer', customerSchema);


    





