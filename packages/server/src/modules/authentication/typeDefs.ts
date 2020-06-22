import { gql } from 'apollo-server';

export interface Login {
  email: string;
  password: string;
}

export default gql`
  input Login {
    email: String!
    password: String!
  }
`;
