const database = require('../app/database-gateway');
const {
  mockDatabase,
  mockJobPosting,
  mockJobPostingToUpdate,
  mockUpdatedDatabase
} = require('./mocks');

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
      const newDatabase = database.getDatabase();
      expect(newDatabase).toEqual(mockUpdatedDatabase);
      done();
    }

    database.updateJobPosting(mockJobPostingToUpdate, 666, cb);
  });
  test('deletes one job posting', done => {
    function cb(err, message) {
      expect(message).toEqual('Job posting deleted');
      done();
    }

    database.deleteJobPosting(666, cb);
  });
});
