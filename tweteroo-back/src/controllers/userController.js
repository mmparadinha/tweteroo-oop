import userService from '../services/userService.js';

export default async function userSignIn(req, res) {
  const { username, avatar } = req.body;

  try {
    await userService.insertUser(username, avatar);
    res.status(200).send('OK, deu tudo certo');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
