import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const verify = await this.loginService.validateLogin(user);
    const token = await this.loginService.login(verify);
    res.status(201).json({ token: { token } });
  };
}
