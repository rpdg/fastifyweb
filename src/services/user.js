const UserModel = require('../models/user')

class User {

  constructor(userModel) {
    this.user = userModel;
  }

  async find(id) {
    return await this.user.where('id', id).fetch()
  }
}

module.exports = new User(UserModel)
