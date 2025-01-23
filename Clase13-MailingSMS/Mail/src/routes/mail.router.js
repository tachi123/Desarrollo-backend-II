import {Router} from 'express';
import * as mailController from '../controllers/mail.controller.js';

const router = Router();

router.get("/send", mailController.enviarCorreo);

export default router;