import Users from '../modules/users/data-sources';
import User from '../modules/users/model';

class DataSources {
  users: Users;

  constructor() {
    this.users = new Users(User);
  }
}

export default DataSources;
