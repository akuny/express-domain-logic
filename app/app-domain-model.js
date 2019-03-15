const express = require('express');
const jobPostingFactory = require('job-posting-factory');
const app = express();

app.use(express.json());

app.post('/job-posting', (req, res) => {
  // This factory is responsible for producing a new
  // instance of JobPosting, which in turn is responsible
  // for validating itself
  jobPostingFactory(req.body, (err, jobPosting) => {
    if (err) {
      res.status(500).send({ error: 'validation error', message: err });
    }
    // JobPosting instance is responsible for saving itself, which
    // in turn includes updating the Organization's featured count
    jobPosting.save((err, savedJobPosting) => {
      if (err) {
        res.status(501).send({ error: 'database error', message: err });
      }
      res.status(201).send(savedJobPosting);
    });
  });
});

module.exports.server = app;
