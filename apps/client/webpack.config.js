/*eslint-disable @typescript-eslint/no-var-requires */

const getWebpackConfig = require('@nrwl/react/plugins/webpack');

const webpack = require('webpack');
require('dotenv').config();

module.exports = (config) => {
  // @see https://github.com/nrwl/nx/issues/1511#issuecomment-504790122
  // @nrwl/apolloが使用可能になったら不要
  config.module.rules.push({
    test: /\.(graphql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  });

  // @see https://github.com/nrwl/nx/issues/1511#issuecomment-504790122
  // @nrwl/apolloが使用可能になったら不要
  config.resolve.extensions.push('.graphql');

  // babel-loaderに取り込まれたら削除
  const babelRuleOptions = config.module.rules.find(
    (r) => r.loader === 'babel-loader'
  ).options;
  babelRuleOptions.plugins.push('@babel/plugin-proposal-optional-chaining');
  babelRuleOptions.plugins.push(
    '@babel/plugin-proposal-nullish-coalescing-operator'
  );

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
        GITHUB_OAUTH_CLIENT_ID: JSON.stringify(
          process.env.GITHUB_OAUTH_CLIENT_ID
        ),
        GITHUB_OAUTH_CLIENT_SECRET: JSON.stringify(
          process.env.GITHUB_OAUTH_CLIENT_SECRET
        ),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  );

  return getWebpackConfig(config);
};
