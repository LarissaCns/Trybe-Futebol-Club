import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import JwtService from '../services/jwtService';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) { }

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if(inProgress) {
      const matches = await this.matchesService.getByFilter(inProgress as string);
      res.status(200).json(matches);
    }
    const allMatches = await this.matchesService.getAll();
    res.status(200).json(allMatches);
  };

  static async create(req: Request, res: Response): Promise<void> {
    const newMatch = req.body;
    const { authorization: token } = req.headers;
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals} = newMatch;
    await JwtService.validateToken(token as string);
    const matchAdd = await MatchesService.create(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
    res.status(201).json(matchAdd);
  }

  public edit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {homeTeamGoals, awayTeamGoals} = req.body;
    await this.matchesService.edit(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({message: 'Qualquer corpo'});
  };

  public finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchesService.finish(id)
    return res.status(200).json({message: 'Finished'});
  };
}
