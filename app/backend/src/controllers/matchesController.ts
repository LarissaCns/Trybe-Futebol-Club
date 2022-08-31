import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) { }

  public getAll = async (req: Request, res: Response) => {
    const allMatches = await this.matchesService.getAll();
    res.status(200).json(allMatches);
  };
}
