const { jobTable, organizationTable, userTable } = require('./database');
const utility = require('./utility');

module.exports = {
  /*
   * JobPosting Database Operations
   */

  getAllJobPostings(cb) {
    return cb(null, jobTable);
  },

  getOneJobPosting(id, cb) {
    const requestedJobPosting = jobTable.find(obj => {
      return obj.id === id;
    });
    return cb(null, requestedJobPosting);
  },

  saveJobPosting(jobPosting, cb) {
    if (!jobPosting) {
      return cb('No jobPosting to save');
    }
    jobTable.push(jobPosting);
    return cb(null, jobPosting);
  },

  updateJobPosting(jobPosting, cb) {
    const indexToChange = utility.idSearch(jobPosting.id, jobTable);
    jobTable.splice(indexToChange, 1, jobPosting);
    return cb(null, jobPosting);
  },

  deleteJobPosting(id, cb) {
    for (let i = 0; i < jobTable.length - 1; i++) {
      if (jobTable[i] === id) {
        jobTable.splice(i, 0);
      }
    }
    delete (jobTable, id);
    return cb(null, 'Job posting deleted');
  },

  /*
   * Organization Database Operations
   */

  getOneOrganization(id, cb) {
    const requestedOrganization = organizationTable.find(obj => {
      return obj.id === id;
    });
    return cb(null, requestedOrganization);
  },

  updateOrganization(organization, cb) {
    const indexToChange = utility.idSearch(organization.id, organizationTable);
    organizationTable.splice(indexToChange, 1, organization);
    return cb(null, organization);
  },

  /*
   * User Database Operations
   */

  getOneUser(id, cb) {
    const requestedUser = userTable.find(obj => {
      return obj.id === id;
    });
    return cb(null, requestedUser);
  },

  /*
   * Other Database Operations
   */

  getDatabase() {
    return { jobTable, userTable, organizationTable };
  }
};
