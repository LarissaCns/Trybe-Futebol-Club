import TeamsModel from '../database/models/teams';

require('dotenv/config');

export default class TeamsService {
  login = async () => {
    const allTeams = await TeamsModel.findAll();
    return allTeams;
  };

}
