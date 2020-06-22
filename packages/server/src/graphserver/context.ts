import { promisify } from 'util';
import { ApolloServerExpressConfig } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

import DataSources from './data-sources';

import { UserSchema } from '../modules/users/model';
import Users from '../modules/users/data-sources';

import { Payload } from '../modules/authentication/resolvers';

export interface Context {
  user?: UserSchema | null;
  dataSources: DataSources;
}

class ServerContext {
  public users: Users;

  constructor(usersDataSource: Users) {
    this.users = usersDataSource;
  }

  context: ApolloServerExpressConfig['context'] = async ({
    req,
  }): Promise<{ user: Context['user'] }> => {
    const token = req.headers.authorization
      ? req.headers.authorization.replace('Bearer ', '')
      : '';

    if (token) {
      const decoded = await promisify(jwt.verify)(token, 'auth.secret');
      if (decoded) {
        const user = await this.users.findOneById(
          Types.ObjectId((decoded as Payload)._id)
        );

        return { user };
      }
    }

    return { user: null };
  };
}

export default ServerContext;
