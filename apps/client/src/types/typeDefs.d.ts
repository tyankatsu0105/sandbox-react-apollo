declare module '*/typeDefs.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const typeDefs: DocumentNode;

  export default defaultDocument;
}
