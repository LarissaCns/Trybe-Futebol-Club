import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import Matches from '../database/models/matches';
import { IMatch } from '../interfaces/match.interface';

// @ts-ignore
import chaiHttp = require('chai-http');


chai.use(chaiHttp)
const { expect } = chai;

const matchMock = {
  "homeTeam": 12, 
  "awayTeam": 5, 
  "homeTeamGoals": 7,
  "awayTeamGoals": 1
}

const allMatches =
    [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    },
  ] as unknown as IMatch[];

  const tokenMock = {
    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJfcHJldmlvdXNEYXRhVmFsdWVzIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsInVzZXJuYW1lIiwicm9sZSIsImVtYWlsIiwicGFzc3dvcmQiXX0sImlzTmV3UmVjb3JkIjpmYWxzZSwiaWF0IjoxNjYzMjc3NjgxfQ.4ub6UA46Wftg9qSXF5UjK7B8Z-Qop5iWOin9SVRMYIQ"
  }

describe('Rota /matches', () => {

  describe('Editar uma partida com sucesso', () => {
    it('Retorna o status 201', async () => {
      const response = await chai.request(app)
      .post('/matches')
      .send(matchMock)
      .set('Authorization', tokenMock.authorization)

      expect(response.status).to.equal(201)

    });
  });
  describe('Terminar uma partida', () => {
    it('finish match', async () => {
      const response = await chai.request(app)
      .patch('/matches/1/finish')
      .set('Authorization', tokenMock.authorization)

      expect(response.status).to.equal(200)
    });
  });
  describe('getAll', () => {
    beforeEach(() => {
      sinon.stub(Matches, "findAll").resolves(allMatches);
    })
    afterEach(() => {
      sinon.restore();
    })

    it('Retorna o status 200', async () => {
      const response = await chai.request(app)
      .get('/matches');
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('array')
    })
});
});