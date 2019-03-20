const databaseGateway = require('../database/database-gateway');

class User {
  constructor(input = {}) {
    this.organizationId = input.organizationId;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.isClean = this.validate();
    return this;
  }

  validate() {
    if (!this.organizationId || this.firstName || this.lastName) {
      return false;
    }
    return true;
  }

  read(id) {
    databaseGateway.getOneUser(id, (err, user) => {
      this.id = user.id;
      this.organizationId = user.organizationId;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      return this;
    });
  }
}

module.exports = User;
