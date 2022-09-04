import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesController = new MatchesController();

const router = Router();

router.get('/', matchesController.getAll);
router.post('/', MatchesController.create);
router.patch('/:id/finish', matchesController.finish);


export default router;
