import Matches from '../database/models/matches';


interface IMatch extends Matches {
  teamHome: string,
  teamAway: string,
}

export default interface MatchInterface {
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  }

export {IMatch}