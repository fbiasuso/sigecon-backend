import mongoose from "mongoose";

//dotenv,config();

const  MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sigecom';

const mongooseOptions = {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
};

export const mongoConnection =  async () => {
    try {
        await
        mongoose.connect(MONGO_URI, mongooseOptions);
        console.log('Conexión exitosa a la base de datos');
    } catch (error){
        console.error('Error al conectar a la base de datos: ', error.message);
        process.exit(1);
    };  
};

 
