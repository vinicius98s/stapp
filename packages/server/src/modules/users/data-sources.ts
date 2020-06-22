import { Types } from 'mongoose';
import { MongoDataSource } from 'apollo-datasource-mongodb';

import { CreateUser } from './typeDefs';
import { UserSchema } from './model';

export default class Users extends MongoDataSource<UserSchema> {
  getByEmail(email: string) {
    return this.model.findOne({ email });
  }

  getById(userId: string) {
    return this.findOneById(Types.ObjectId(userId));
  }

  async create(user: CreateUser) {
    const { _id, name, email, password } = await this.model.create(user);
    return {
      name,
      email,
      password,
      _id,
    };
  }
}
