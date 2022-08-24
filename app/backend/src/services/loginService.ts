import { compareSync } from 'bcryptjs';
import * as Joi from 'joi';
import UserModel from '../database/models/users';
import LoginInterface from '../interfaces/login.interface';
import JwtService from './jwtService';

export default class LoginService {
  validateLogin = (data: object) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(6).required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      const e = new Error('All fields must be filled');
      e.name = 'Unauthorized';
      throw e;
    }
    return value;
  };

  login = async (login: LoginInterface): Promise<string> => {
    const { email, password } = login;
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
