import React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { typeDefs } from '../../server/src/graphserver/typeDefs';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '',
  typeDefs,
});

const ApolloProvider: React.FC = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
