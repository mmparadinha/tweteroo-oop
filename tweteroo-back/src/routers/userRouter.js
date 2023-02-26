import express from 'express';
import userSignIn from '../controllers/userController.js';

const userRouter = express.Router();

userRouter
  .post('/sign-up', userSignIn);

  export default userRouter;
