const JobPosting = require('./model/JobPosting');

const makeJobPosting = (params, cb) => {
  const jobPosting = new JobPosting(params);
  if (!jobPosting.isClean) {
    return cb('Job posting failed validation');
  }
  return cb(null, jobPosting);
};

module.exports = {
  makeJobPosting
};
