import chai, { expect } from 'chai';
import Sinon from 'sinon';
import chaiHttp from'chai-http';
import { app } from '../app';
import Users from '../database/models/users';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /login', () => {
  describe('Login com sucesso de um usuário', () => {

  }) 
  describe('Login com fracasso de um usuário', () => {
    describe
  }) 

  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
