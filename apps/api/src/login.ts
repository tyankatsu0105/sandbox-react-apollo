import express from 'express';
import serverless from 'serverless-http';
import request from 'superagent';

import {
  githubOauthClientId,
  githubOauthClientSecret,
  production,
} from './environments';

const app = express();
const router = express.Router();
const agent = request.agent();

const functionName = 'login';
const path = `/.netlify/functions/${functionName}`;

const redirectPath = production
  ? 'https://tyankatsu-sandbox-react-apollo.netlify.com/'
  : 'http://localhost:5000';

router.get('/auth', (req, res) => {
  const { query } = req;
  const { code } = query;

  if (!code) {
    res.send({
      succcess: false,
      message: 'Error no code.',
    });
  }

  agent
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: githubOauthClientId,
      client_secret: githubOauthClientSecret,
      code: code,
    })
    .set('Accept', 'application/json')
    .then((result) => {
      const data = result.body;
      const token = data['access_token'];

      res.cookie('githubAccessToken', token).status(200).redirect(redirectPath);
    });
});

app.use(path, router);

exports.handler = serverless(app);
