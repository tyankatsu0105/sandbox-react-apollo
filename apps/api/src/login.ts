import express from 'express';
import serverless from 'serverless-http';
import request from 'superagent';

import { githubOauthClientId, githubOauthClientSecret } from './environments';

const app = express();
const router = express.Router();
const agent = request.agent();

const functionName = 'login';
const path = `/.netlify/functions/${functionName}`;

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

      res
        .cookie('githubAccessToken', token)
        .status(200)
        .redirect('http://localhost:5000');
    });
});

app.use(path, router);

exports.handler = serverless(app);
