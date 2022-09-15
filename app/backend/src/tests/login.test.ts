import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import { app } from '../app';
import Users from '../database/models/users';
import {
  userMock,
  loginMock,
  loginErrorEmailMock,
  loginErrorPasswordMock,
} from './mock/User';

chai.use(chaiHttp)

describe('Rota /login', () => {
  describe('Realiza o login do usuário', () => {
    it('Retorne status 200 em caso de sucesso', async () => {
      sinon.stub(Users, 'findOne').resolves(userMock as Users);
      sinon.restore();
      const response = await chai.request(app)
        .post('/login')
        .send(loginMock);

      expect(response.status).to.be.equal(200);
      expect(response.body.token).to.include('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
      sinon.restore();
    }),
    it('Retorne status 400 caso o email esteja errado', async () => {
      const email = await chai.request(app)
        .post('/login')
        .send(loginErrorEmailMock);

      expect(email.status).to.be.equal(400);
      expect(email.body.message).to.include('All fields must be filled');
      sinon.restore();
    })

    it('Retorne status 400 caso a senha esteja errada', async () => {
      const password = await chai.request(app)
        .post('/login')
        .send(loginErrorPasswordMock);
      sinon.restore();

      expect(password.status).to.be.equal(400);
      expect(password.body.message).to.include('All fields must be filled');
    })
  });
})