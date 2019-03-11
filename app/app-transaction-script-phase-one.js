const express = require('express');
const app = express();
const validator = require('./validator');
const databaseGateway = require('./database-gateway');

app.use(express.json());

app.get('/job-posting', (req, res) => {
  databaseGateway.getAllJobPostings((err, allJobPostings) => {
    if (err) {
      return res.status(500).send({ error: 'database error', message: err });
    }
    return res.status(200).send(allJobPostings);
  });
});

app.post('/job-posting', (req, res) => {
  validator.checkJobPosting(req.body.jobPosting, (err, validatedJobPosting) => {
    if (err) {
      return res.status(500).send({ error: 'validation error', message: err });
    }
    databaseGateway.saveJobPosting(
      validatedJobPosting,
      (err, savedJobPosting) => {
        if (err) {
          return res
            .status(500)
            .send({ error: 'database error', message: err });
        }
        return res.status(201).send(savedJobPosting);
      }
    );
  });
});

app.get('/job-posting/:id', (req, res) => {
  databaseGateway.getOneJobPosting(req.params.id, (err, jobPosting) => {
    if (err) {
      return res.status(500).send({ error: 'database error', message: err });
    }
    return res.status(200).send(jobPosting);
  });
});

app.put('/job-posting/:id', (req, res) => {
  validator.checkJobPosting(req.body.jobPosting, (err, validatedJobPosting) => {
    if (err) {
      return res.status(500).send({ error: 'validation error', message: err });
    }
    databaseGateway.updateJobPosting(
      validatedJobPosting,
      req.params.id,
      (err, updatedJobPosting) => {
        if (err) {
          return res
            .status(500)
            .send({ error: 'database error', message: err });
        }
        return res.status(200).send(updatedJobPosting);
      }
    );
  });
});

app.delete('/job-posting/:id', (req, res) => {
  databaseGateway.deleteJobPosting(
    req.params.id,
    (err, confirmationMessage) => {
      if (err) {
        return res.status(500).send({ error: 'database error', message: err });
      }
      return res.status(200).send(confirmationMessage);
    }
  );
});

module.exports.server = app;
