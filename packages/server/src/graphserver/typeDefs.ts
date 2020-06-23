import { gql } from 'apollo-server';
import Users from '../modules/users/typeDefs';
import Authentication from '../modules/authentication/typeDefs';

const Server = gql`
  type Query {
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUser!): User!
    login(input: Login!): String
  }
`;

export const typeDefs = [Server, Users, Authentication];
