import gql from 'graphql-tag';
import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Mutation: {
    changeValue: (_, args, { cache }) => {
      const query = gql`
        query {
          counter {
            current
          }
        }
      `;

      const prev = cache.readQuery({ query });
      const current =
        args.type === '+' ? ++prev.counter.current : --prev.counter.current;
      const data = {
        counter: {
          current,
          __typename: 'Counter'
        }
      };

      // 書き込むと使われているコンポーネントが更新される
      cache.writeData({ data });

      return current;
    }
  }
};
