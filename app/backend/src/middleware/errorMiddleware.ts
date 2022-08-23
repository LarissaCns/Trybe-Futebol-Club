import 'express-async-errors';
import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'UnauthorizedError':
      res.status(400).json({ message });
      break;
    case 'InvalidToken':
      res.status(401).json({ message });
      break;
    case 'AlreadyExists':
      res.status(409).json({ message });
      break;
    case 'NotFound':
      return res.status(404).json({ message: err.message });
    default:
      res.status(500).json({ message });
      break;
  }
};

export default errorMiddleware;
