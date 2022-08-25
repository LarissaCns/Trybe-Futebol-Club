import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginController = new LoginController();

const router = Router();

router.post('/', loginController.login);
router.get('/validate', loginController.validate);

export default router;
