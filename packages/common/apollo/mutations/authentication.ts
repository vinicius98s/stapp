import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($input: Login!) {
    token: login(input: $input)
  }
`;

export const REGISTER = gql`
  mutation createUser($input: CreateUser!) {
    createUser(input: $input) {
      _id
      email
      name
      password
    }
  }
`;
