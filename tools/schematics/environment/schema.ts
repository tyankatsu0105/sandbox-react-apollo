export type Schema = {
  project: string;

  env: string;
  apiEndpoint: string;
  githubOAuthClientId: string;
  githubOAuthClientSecret: string;
  githubToken?: string;
  sentryDsn: string;
};
