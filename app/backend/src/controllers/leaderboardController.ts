import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public getHomeTeam = async (req: Request, res: Response) => {
    const allHomeTeams = await this.leaderboardService.getHomeTeam();
    res.status(200).json(allHomeTeams);
  };
}
