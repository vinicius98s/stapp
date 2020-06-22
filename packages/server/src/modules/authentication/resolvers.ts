import { IFieldResolver, ApolloError, UserInputError } from 'apollo-server';
import jwt from 'jsonwebtoken';

import { Context } from '../../graphserver/context';

import { Login } from './typeDefs';

import authConfig from '../../config/auth';

export interface Payload {
  _id: string;
}

export const login: IFieldResolver<any, Context, { input: Login }> = async (
  _parent,
  { input: { email, password } },
  { dataSources: { users } }
) => {
  const user = await users.getByEmail(email);
  if (!user) throw new ApolloError('User not found');

  if (!(await user.comparePassword(password))) {
    throw new UserInputError("Password doesn't match");
  }

  const { secret, expiresIn } = authConfig;
  const token = jwt.sign({ _id: user._id }, secret, { expiresIn });
  return token;
};
