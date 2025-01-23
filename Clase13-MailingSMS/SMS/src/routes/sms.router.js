import {Router} from 'express';
import * as smsController from '../controllers/sms.controller.js';

const router = Router();

router.get("/send", smsController.enviarSMS);

export default router;