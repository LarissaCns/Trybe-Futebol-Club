import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/teams';
// import Teams from '../database/models/teams';
chai.use(chaiHttp);

const { expect } = chai;
chai.use(chaiHttp)

const teamMock = {
    id: 1,
    teamName: "Avaí/Kindermann" 
} as Teams;

const allTeamsMock = [
    {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "teamName": "Bahia"
    },
    {
      "id": 3,
      "teamName": "Botafogo"
    },
    {
      "id": 4,
      "teamName": "Corinthians"
    },
    {
      "id": 5,
      "teamName": "Cruzeiro"
    },
    {
      "id": 6,
      "teamName": "Ferroviária"
    },
    {
      "id": 7,
      "teamName": "Flamengo"
    },
    {
      "id": 8,
      "teamName": "Grêmio"
    },
    {
      "id": 9,
      "teamName": "Internacional"
    },
    {
      "id": 10,
      "teamName": "Minas Brasília"
    },
    {
      "id": 11,
      "teamName": "Napoli-SC"
    },
    {
      "id": 12,
      "teamName": "Palmeiras"
    },
    {
      "id": 13,
      "teamName": "Real Brasília"
    },
    {
      "id": 14,
      "teamName": "Santos"
    },
    {
      "id": 15,
      "teamName": "São José-SP"
    },
    {
      "id": 16,
      "teamName": "São Paulo"
    }
  ] as Teams[];

describe('Rota /teams', () => {
  let chaiHttpResponse: Response;
  it('Get All Teams', async () => {
    sinon
        .stub(Teams, 'findAll')
        .resolves(allTeamsMock);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams');

      expect(chaiHttpResponse.body)
        .to.be.an('array')
        .and.to.deep.equal(allTeamsMock);
  });

  it('Get one Team', async () => {
    sinon
        .stub(Teams, 'findByPk')
        .resolves(teamMock);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1');

      expect(chaiHttpResponse.body)
        .to.be.an('object')
        .and.to.deep.equal(teamMock);
  });
});