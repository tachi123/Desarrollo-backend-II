import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 8080,
    urlMongo : process.env.URL_MONGO
}