import { Router } from 'express';
import * as SessionController from '../controllers/session.controller';
const router = new Router();

router.route('/login').get(SessionController.newSession);

router.route('/login').post(SessionController.createSession);

router.route('/logout').get(SessionController.destroySession);