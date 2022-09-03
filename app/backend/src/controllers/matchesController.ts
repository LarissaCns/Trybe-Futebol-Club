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
    if(homeTeam === awayTeam) {
      res.status(401).json({message: "It's not possible to create a match with two equals teams"});
    }
    console.log(homeTeam, awayTeam);
    const firtTeam = await MatchesService.verifyIfExist(homeTeam)
    const secondTeam = await MatchesService.verifyIfExist(awayTeam)
    if(!firtTeam || !secondTeam) {
      res.status(404).json({message: "There is no team with such id!"});
    }
    const matchAdd = await MatchesService.create(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
    res.status(201).json(matchAdd);
  }
}
