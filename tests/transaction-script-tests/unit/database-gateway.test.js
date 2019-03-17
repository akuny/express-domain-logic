const database = require('../../../app-transaction-script/database-gateway');
const {
  mockDatabase,
  mockJobPosting,
  mockJobPostingToUpdate
} = require('../mocks');

describe('basic database operations', () => {
  test('gets all job postings', done => {
    function cb(err, allJobPostings) {
      expect(allJobPostings).toEqual(mockDatabase);
      done();
    }

    database.getAllJobPostings(cb);
  });
  test('saves job posting', done => {
    function cb(err, savedJobPosting) {
      expect(savedJobPosting).toEqual(mockJobPosting);
      done();
    }

    database.saveJobPosting(mockJobPosting, cb);
  });
  test('gets one job posting', done => {
    function cb(err, oneJobPosting) {
      expect(oneJobPosting).toEqual(mockJobPosting);
      done();
    }

    database.getOneJobPosting(666, cb);
  });
  test('updates one job posting', done => {
    function cb(err, updatedJobPosting) {
      expect(updatedJobPosting).toEqual(mockJobPostingToUpdate);
      done();
    }

    database.updateJobPosting(mockJobPostingToUpdate, cb);
  });
  test('deletes one job posting', done => {
    function cb(err, message) {
      expect(message).toEqual('Job posting deleted');
      done();
    }

    database.deleteJobPosting(666, cb);
  });
});
