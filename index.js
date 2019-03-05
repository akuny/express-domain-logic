const express = require('express');
const app = express();
const validator = require('./validator');
const databaseGateway = require('./database-gateway');

app.get('/tbd', (req, res) => {
  databaseGateway.getAllTBDs((err, allTBDs) => {
    if (err) res.status(500).send({ error: 'database error', message: err });
    res.status(200).send(allTBDs);
  });
});

app.post('/tbd', (req, res) => {
  validator.checkTBD(req.body.tbd, (err, validatedTBD) => {
    if (err) res.status(500).send({ error: 'validation error', message: err });
    databaseGateway.saveTBD(validatedTBD, (err, savedTBD) => {
      if (err) res.status(500).send({ error: 'database error', message: err });
      res.status(200).send(savedTBD);
    });
  });
});

app.get('/tbd/:id', (req, res) => {
  databaseGateway.getOneTBD(req.params.id, (err, TBD) => {
    if (err) res.status(500).send({ error: 'database error', message: err });
    res.status(200).send(TBD);
  });
});

app.put('/tbd/:id', (req, res) => {
  validator.checkTBD(req.body.tbd, (err, validatedTBD) => {
    if (err) res.status(500).send({ error: 'validation error', message: err });
    databaseGateway.updateTBD(req.params.id, (err, updatedTBD) => {
      if (err) res.status(500).send({ error: 'database error', message: err });
      res.status(200).send(updatedTBD);
    });
  });
});

app.delete('/tbd/:id', (req, res) => {
  databaseGateway.deleteTBD(req.params.id, (err, confirmationMessage) => {
    if (err) res.status(500).send({ error: 'database error', message: err });
    res.status(200).send(confirmationMessage);
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
