import userRepository from '../repositories/userRepository.js';

async function insertUser(username, avatar) {
  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
  }

  const userExists = await userRepository.searchUser(username);
  if (!userExists) {
    console.log('usuário novo')
  }
}

const userService = {
  insertUser
}

export default userService;