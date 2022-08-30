import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsController = new TeamsController();

const router = Router();

router.get('/', teamsController.getAll);


export default router;
