import Tweet from '../models/tweetModel.js';

async function insertTweet(username, tweet) {
  if (!username || !tweet) {
    return false;
  }

  const newTweet = new Tweet({ username, tweet })
  return newTweet;
}

async function listUserTweets(username) {

}

async function listAllTweets(username, tweet) {
  if (!username || !tweet) {
    return false;
  }

  const newTweet = new Tweet({ username, tweet })
  return newTweet;
}

const tweetsService = {
  insertTweet
}

export default tweetsService;