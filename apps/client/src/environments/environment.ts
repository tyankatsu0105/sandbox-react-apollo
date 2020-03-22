export const environment = {
  production: process.env.NODE_ENV === 'production',
  githubOauthClientId: process.env.GITHUB_OAUTH_CLIENT_ID,
  githubOauthClientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  apiEndpoint: 'https://api.github.com/graphql',
  sentry: {
    dsn: process.env.SENTRY_DSN || ''
  }
};
