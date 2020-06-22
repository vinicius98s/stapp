import { resolvers as users } from '../modules/users/resolvers';
import { login } from '../modules/authentication/resolvers';

import * as usersMutations from '../modules/users/mutations';

export const resolvers = {
  Query: {
    ...users,
  },
  Mutation: {
    ...usersMutations,
    login,
  },
};
