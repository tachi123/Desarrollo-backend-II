import dotenv from 'dotenv';

dotenv.config();

export default {
    persistence: process.env.PERSISTENCE,
    urlMongo: process.env.URLMONGO;
}