export const environment = {
  production: process.env.NODE_ENV === 'production',
  apiEndpoint: 'https://api.github.com/graphql',
  sentry: {
    dsn: process.env.SENTRY_DSN || ''
  }
};
