import { Types } from 'mongoose';
import { gql } from 'apollo-server';

export interface User {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  input CreateUser {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;
