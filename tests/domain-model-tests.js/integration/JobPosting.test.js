const JobPosting = require('../../../app-domain-model/model/JobPosting');
const { mockParams } = require('../mocks');

describe('job posting instantiation', () => {
  test('instantiates a job posting', done => {
    const testInstance = new JobPosting(mockParams);
    expect(testInstance).toBeDefined();
    done();
  });
});
