import * as jwt from 'jsonwebtoken';

require('dotenv/config');

export default class JwtService {
  static createToken(data: { email: string, password: string }): string {
    return jwt.sign(data, process.env.JWT_SECRET || 'jwt_token');
  }

  static validateToken(token: string) {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET || 'jwt_token');
      return data;
    } catch (e) {
      const error = new Error('Token must be a valid token');
      error.name = 'Unauthorized';
      throw error;
    }
  }
}

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
