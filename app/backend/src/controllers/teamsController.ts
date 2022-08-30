import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

export default class TeamsController {
  constructor(private teamsService = new TeamsService()) { }

  public getAll = async (req: Request, res: Response) => {
    const allTeams = await this.teamsService.login();
    res.status(200).json(allTeams);
  };

  public get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.teamsService.get(Number(id));
    res.status(200).json(team);
  };
}
