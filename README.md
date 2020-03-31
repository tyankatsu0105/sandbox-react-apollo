# 使い方

```bash
npm run start client
npm run api
```

# 仕組み
- GitHub OAuthでtokenを取得してheaderのBearerにセットして使う
  - OAuth Apps登録
  - https://github.com/login/oauth/authorize にclient idとscope付けて飛ぶ
  - 認証済んだらリダイレクト先でexpress + superagentでclient idとclient secretとcodeを付けてpostする
    - この時、リダイレクト先を予めwebpack dev serverのproxyで設定しておく
  - 取得したaccess_tokenをcookieにセットして、トップにリダイレクト
  - cookieからtoken取得して、apolloでrequest headerをアップデートする際にBearerにtokenを使用する

# 型生成
- [apollo-tooling](https://github.com/apollographql/apollo-tooling)の`codegen`にまかせている
  - VSCode拡張との相性がいいため
- [graphql\-code\-generator](https://github.com/dotansimha/graphql-code-generator)も使用する
  - local schema resolverの型を生成したいため

- https://www.youtube.com/watch?v=wcUdBgktd4s&feature=emb_logo
- https://developer.github.com/v4/explorer/
- https://auth0.com/docs/connections/social/github
- https://blog.hiroppy.me/entry/apollo-link-state
- https://itnext.io/managing-local-state-with-apollo-client-and-react-hooks-9ad357e6d649
- https://github.com/dotansimha/graphql-code-generator/issues/3219
- https://github.com/samsarahq/graphql-loader#import-statements-in-graphql-files
