import express from 'express';
import { postTweet, getUserTweets, getAllTweets } from '../controllers/tweetsController.js';

const tweetsRouter = express.Router();

tweetsRouter
  .post('/tweets', postTweet)
  .get('/tweets/:username', getUserTweets)
  .get('/tweets', getAllTweets);

  export default tweetsRouter;
