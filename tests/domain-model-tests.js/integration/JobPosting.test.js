const JobPosting = require('../../../app-domain-model/model/JobPosting');
const { mockParamsNormal } = require('../mocks');

describe('job posting instantiation', () => {
  test('instantiates a job posting', done => {
    const testInstance = new JobPosting(mockParamsNormal);
    expect(testInstance).toBeDefined();
    done();
  });
});
