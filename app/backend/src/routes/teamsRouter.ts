import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsController = new TeamsController();

const router = Router();

router.get('/', teamsController.getAll);
router.get('/:id', teamsController.get);



export default router;
