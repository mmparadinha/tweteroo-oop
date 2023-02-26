import tweetsService from '../services/tweetsService.js';

const tweets = [];

export async function postTweet(req, res) {
  const { tweet, username } = req.body;

  try {
    const newTweet = await tweetsService.insertTweet(tweet, username);
    if (!newTweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    //const { avatar } = usuarios.find(user => user.username === username);

    //tweets.push({ username, tweet, avatar });
    //botar os dados em banco mongo, tabela tweets e participantes

    res.status(201).send('OK, seu tweet foi criado');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
  
}

export function getUserTweets(req, res) {
  const { username } = req.params;

  try {
    //const tweetsDoUsuario = tweets.filter(t => t.username === username);
    //puxar todos os tweets do usuário
    res.status(200).send(tweetsDoUsuario);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export function getAllTweets(req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
}

function reverseTweets() {
  return [...tweets].reverse();
}
