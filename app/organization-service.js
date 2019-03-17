const databaseGateway = require('./database-gateway');
const Organization = require('./Organization');

const getOne = (userId, cb) => {
  databaseGateway.getOneUser(userId, (err, user) => {
    if (err) {
      return cb('User not found');
    }
    databaseGateway.getOneOrganization(
      user.organizationId,
      (err, fetchedOrganization) => {
        if (err) {
          return cb('Organization not found');
        }
        const organization = new Organization(fetchedOrganization);
        return cb(null, organization);
      }
    );
  });
};

module.exports.getOne = getOne;
