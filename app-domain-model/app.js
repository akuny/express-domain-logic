const express = require('express');
const JobPosting = require('./model/JobPosting');

const app = express();
app.use(express.json());

app.post('/job-posting', (req, res) => {
  const jobPosting = new JobPosting(req.body.jobPosting);
  jobPosting.create((err, savedJobPosting) => {
    if (err) {
      return res.status(501).send({
        error: 'There was an error saving the job posting',
        message: err
      });
    }
    return res.status(201).send(savedJobPosting);
  });
});

module.exports.server = app;
