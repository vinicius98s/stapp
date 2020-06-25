import React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const getClient = (uri: string, name: string, version: string) =>
  new ApolloClient<InMemoryCache>({
    cache: new InMemoryCache(),
    uri,
    name,
    version,
  });

interface Props {
  clientName: string;
  clientVersion: string;
  URI?: string;
}

const ApolloProvider: React.FC<Props> = ({
  children,
  URI = 'http://localhost:4000',
  clientName,
  clientVersion,
}) => {
  const client = getClient(URI, clientName, clientVersion);
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
