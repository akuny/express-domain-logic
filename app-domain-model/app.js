const express = require('express');
const JobPosting = require('./model/JobPosting');
const app = express();
app.use(express.json());

app.post('/job-posting', (req, res) => {
  const jobPosting = new JobPosting(req.body.jobPosting);
  if (jobPosting.isClean) {
    jobPosting.create((err, savedJobPosting) => {
      if (err) {
        return res.status(501).send({ error: 'database error', message: err });
      }
      return res.status(201).send(savedJobPosting);
    });
  }
  return res.status(500).send({ error: 'validation error', message: err });
});

module.exports.server = app;
