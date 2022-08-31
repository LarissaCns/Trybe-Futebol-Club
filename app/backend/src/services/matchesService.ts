import MatchesModel from '../database/models/matches';
import Teams from '../database/models/teams'
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
}
