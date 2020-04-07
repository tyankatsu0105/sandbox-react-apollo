import request from 'superagent';
import { Express } from 'express';

import {
  githubOauthClientId,
  githubOauthClientSecret,
} from '../../environments';

const agent = request.agent();

export const github = (app: Express) => {
  app.get('/login/auth', (req, res) => {
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
};
