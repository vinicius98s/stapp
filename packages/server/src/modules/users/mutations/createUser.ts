import { IFieldResolver, UserInputError, ForbiddenError } from 'apollo-server';

import { CreateUser } from '../typeDefs';
import DataSources from '../../../graphserver/data-sources';

interface Context {
  dataSources: DataSources;
}

const createUser: IFieldResolver<any, Context, { input: CreateUser }> = async (
  _parent,
  { input },
  { dataSources: { users } }
) => {
  const { password, confirmPassword, email } = input;
  if (password !== confirmPassword) {
    throw new UserInputError('Confirm password does not match password');
  }

  const existantUser = await users.getUserByEmail(email);
  if (existantUser) {
    throw new ForbiddenError('Account already exists');
  }

  return users.createUser(input);
};

export default createUser;
