const path = require('path');
const clientName = 'client';

require('dotenv').config();


module.exports = {
  client: {
    includes: [path.join(process.cwd(), `apps/${clientName}/**/*.graphql`)],
    service: {
      name: 'github',
      url: 'https://api.github.com/graphql',
      // optional headers
      headers: {
        authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`
      },
      // optional disable SSL validation check
      skipSSLValidation: true
    }
  }
};
