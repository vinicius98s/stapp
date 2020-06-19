import { IFieldResolver } from 'apollo-server';

import DataSources from '../../graphserver/data-sources';

interface Context {
  dataSources: DataSources;
}

const user: IFieldResolver<any, Context, { id: string }> = async (
  _parent,
  { id },
  { dataSources: { users } }
) => {
  return users.getUserById(id);
};

export const resolvers = {
  user,
};
