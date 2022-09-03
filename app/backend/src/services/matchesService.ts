import MatchesModel from '../database/models/matches';
import TeamsModel from '../database/models/teams';
import Teams from '../database/models/teams'
import * as jwt from 'jsonwebtoken';
import MatchInterface from '../interfaces/match.interface'
import TeamInterface from '../interfaces/teams.interface'
require('dotenv/config');

export default class MatchesService {
  getAll = async () => {
    const allMatches = await MatchesModel.findAll(
        {
            include: [{
              model: Teams,
              as: 'teamHome',
              attributes: ['teamName'],
            },
            {
              model: Teams,
              as: 'teamAway',
              attributes: ['teamName'],
            }],
          }
    );
    return allMatches;
  };

  getByFilter = async (inProgress: string) => {
    if(inProgress === 'true') {
      const allMatches = await MatchesModel.findAll(
        {
            where: {'inProgress': true},
            include: [{
              model: Teams,
              as: 'teamHome',
              attributes: ['teamName'],
            },
            {
              model: Teams,
              as: 'teamAway',
              attributes: ['teamName'],
            }],
          }
    )
    return allMatches;
    }
    if(inProgress === 'false') {
      const allMatches = await MatchesModel.findAll(
        {
            where: {'inProgress': false},
            include: [{
              model: Teams,
              as: 'teamHome',
              attributes: ['teamName'],
            },
            {
              model: Teams,
              as: 'teamAway',
              attributes: ['teamName'],
            }],
          }
    )
    return allMatches;
    }
    
  }

   static async verifyIfExist(id: string): Promise<TeamInterface | null> {
    const team = await TeamsModel.findByPk(id);
    return team;
  }

   static async create(homeTeam: number, awayTeam: number, homeTeamGoals: number, awayTeamGoals: number): Promise<MatchInterface> {
    const newMatch = await MatchesModel.create({homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true})
    return newMatch;
  }
}
