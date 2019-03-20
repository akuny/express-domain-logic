const express = require('express');
const { makeJobPosting } = require('./job-posting-factory');

const app = express();
app.use(express.json());

app.post('/job-posting', (req, res) => {
  const jobPostingParams = req.body.jobPosting;
  makeJobPosting(jobPostingParams, (err, jobPosting) => {
    if (err) {
      res.status(500).send({ error: 'validation error', message: err });
    }
    jobPosting.create((err, savedJobPosting) => {
      if (err) {
        res.status(501).send({ error: 'database error', message: err });
      }
      res.status(201).send(savedJobPosting);
    });
  });
});

module.exports.server = app;
