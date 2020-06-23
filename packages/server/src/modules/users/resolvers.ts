import { IFieldResolver, UserInputError } from 'apollo-server';

import DataSources from '../../graphserver/data-sources';

interface Context {
  dataSources: DataSources;
}

const user: IFieldResolver<any, Context, { id: string }> = async (
  _parent,
  { id },
  { dataSources: { users } }
) => {
  const user = users.getById(id);
  if (!user) {
    throw new UserInputError('User not found');
  }
  return user;
};

export const resolvers = {
  user,
};
