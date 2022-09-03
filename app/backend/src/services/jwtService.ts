import * as jwt from 'jsonwebtoken';
// import UserInterface from '../interfaces/user.interface';

require('dotenv/config');

export default class JwtService {
  /* static createToken(data: { email: string, role: string }): string {
    const newToken = jwt.sign(data, process.env.JWT_SECRET as string);
    return newToken;
  } */

  static validateToken(token: string) {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET || 'jwt_token') as jwt.JwtPayload;
      return data.role;
    } catch (e) {
      const error = new Error('Token must be a valid token');
      error.name = 'Unauthorized';
      throw error;
    }
  }
}

// Modelo com js
/* const jwtService = {
    createToken: (data) => {
      const token = jwt.sign({ data }, process.env.JWT_SECRET);
      return token;
    },

    validateToken: async (token) => {
      if (!token) {
        const error = new Error('Token not found');
        error.name = 'InvalidToken';
        throw error;
      }
      try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        return data;
      } catch (e) {
        const error = new Error('Expired or invalid token');
        error.name = 'InvalidToken';
        throw error;
      }
    },
  };

  module.exports = jwtService; */
