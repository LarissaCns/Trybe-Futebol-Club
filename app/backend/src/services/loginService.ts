import { compareSync } from 'bcryptjs';
import UserModel from '../database/models/users';
import LoginInterface from '../interfaces/login.interface';
import JwtService from './jwtService';

export default class LoginService {
  login = async (login: LoginInterface): Promise<string> => {
    const { email, password } = login;
    if (!email || !password) {
      const e = new Error('All fields must be filled');
      e.name = 'BadRequest';
      throw e;
    }
    const user = await UserModel.findOne({ where: { email } });
    if (!user || !compareSync(password, user.password)) {
      const e = new Error('Incorrect email or password');
      e.name = 'Unauthorized';
      throw e;
    }
    const token = JwtService.createToken({ email, password });
    return token;
  };
}
