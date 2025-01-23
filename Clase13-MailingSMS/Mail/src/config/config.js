import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT : process.env.APP_PORT,
    mailService:  process.env.MAIL_SERVICE,
    mailPort : process.env.MAIL_PORT,
    mailFrom : process.env.MAIL_FROM,
    mailPass :   process.env.MAIL_PASS
}