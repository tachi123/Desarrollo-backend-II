import mongoose from 'mongoose';

const connectDB = async (url) => {
    try{
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    }catch (error){
        console.error("Error conectando con MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;