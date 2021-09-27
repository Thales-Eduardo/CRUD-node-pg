import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
// import router from "./router";

import AppErrors from './errors/AppErrors';
import './database/runMigrations';
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
// app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 🔥🔥🚒`);
});
