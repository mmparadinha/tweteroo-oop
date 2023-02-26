import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import userRouter from './routers/userRouter.js';
import tweetsRouter from './routers/tweetsRouter.js';

const server = express();

server
  .use(cors())
  .use(json());

server
  .use(userRouter)
  .use(tweetsRouter);

server.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
