import mongo from '../database/mongodb.js';

const db = mongo();

async function searchUser(username) {
  return db.collection('users').findOne({
    username
  });
}

const userRepository = {
  searchUser
}

export default userRepository;