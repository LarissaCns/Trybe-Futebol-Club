import { compareSync } from 'bcryptjs';
import * as Joi from 'joi';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/users';
// import LoginInterface from '../interfaces/login.interface';
import UserInterface from '../interfaces/user.interface';
// import TokenInterface from '../interfaces/token.interface';
// import JwtService from './jwtService';

require('dotenv/config');

export default class LoginService {
  validateLogin = (data: object) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(6).required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      const e = new Error('All fields must be filled');
      e.name = 'BadRequest';
      throw e;
    }
    return value;
  };

  login = async (login: UserInterface) => {
    const { email, password } = login;
    const user = await UserModel.findOne({ where: { email } });
    if (!user || !compareSync(password, user.password)) {
      const e = new Error('Incorrect email or password');
      e.name = 'Unauthorized';
      throw e;
    }
    const { password: userPassword, ...userWithoutPassword } = user;
    // cria o token sem o password
    const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET as string);
    return token;
  };

  validate = async (token: string) => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
      console.log(data);
      return data;
    } catch (e) {
      const error = new Error('Token must be a valid token');
      error.name = 'Unauthorized';
      throw error;
    }
  };
}
