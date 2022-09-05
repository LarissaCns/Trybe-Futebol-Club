import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/home', leaderboardController.getHomeTeam);

export default router;
