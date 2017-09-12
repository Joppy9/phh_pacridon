const db = require('../db');
const Record = require('./record');

class UserFollowing extends Record {
  static tableName() {
    return "toots","user_followings";
  }

  static columns() {
    return ["user_id", "body","target_id"]
  }

  static create(user, body) {
    return new UserFollowing({ user_id: res.locals.currentUser.id, target_id: req.params.id })
  }
}


module.exports = UserFollowing;