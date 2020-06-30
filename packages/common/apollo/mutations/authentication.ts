import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($input: Login!) {
    token: login(input: $input)
  }
`;

export const REGISTER = gql`
  mutation createUser($input: CreateUser!) {
    createUser(input: $input) {
      _id
    }
  }
`;
