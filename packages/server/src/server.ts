import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { typeDefs } from './graphserver/typeDefs';
import { resolvers } from './graphserver/resolvers';
import DataSources from './graphserver/data-sources';
import Context from './graphserver/context';

const dataSources = new DataSources();
const { context } = new Context(dataSources.users);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ ...dataSources }),
  context,
});

class Server {
  server: ApolloServer;

  constructor(server: ApolloServer) {
    this.server = server;
  }

  async init() {
    try {
      await mongoose.connect('mongodb://localhost:27017/stapp', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });

      const { url } = await this.server.listen();

      console.log('Connected to database');
      console.log(`🚀 Server ready at ${url}`);
    } catch (e) {
      console.error('Failed to start server. Please try again');
    }
  }
}

new Server(apolloServer).init();
