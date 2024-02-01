/* graphql-api Graphweaver Project */
import 'reflect-metadata';
import Graphweaver from '@exogee/graphweaver-server';
import { resolvers } from './schema';

export const graphweaver = new Graphweaver({
  resolvers,
  fileAutoGenerationOptions: {
    watchForFileChangesInPaths: ['../../frontend/src'],
  },
});

export const handler = graphweaver.handler();
