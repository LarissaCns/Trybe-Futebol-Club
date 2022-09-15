import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', leaderboardController.getHomeTeam);
router.get('/away', leaderboardController.getAwayTeam);
// router.get('/', leaderboardController.getAll);

export default router;
