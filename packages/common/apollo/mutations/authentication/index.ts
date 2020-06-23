import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($input: Login!) {
    token: login(input: $input)
  }
`;
