const request = require('supertest');
const { server } = require('../app/app-transaction-script-phase-one');
const { mockJobPosting, mockJobPostingToUpdate } = require('./mocks');

describe('transaction script route integration tests', () => {
  test('GET /job-posting', done => {
    request(server)
      .get('/job-posting')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  test('POST /job-posting', done => {
    request(server)
      .post('/job-posting')
      .send({ jobPosting: mockJobPosting })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(201, done);
  });
  test('GET /job-posting/:id', done => {
    request(server)
      .get('/job-posting/1')
      .expect(200, done);
  });
  test('PUT /job-posting/:id', done => {
    request(server)
      .put('/job-posting/666')
      .send({ jobPosting: mockJobPostingToUpdate })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
  test('DELETE /job-posting/:id', done => {
    request(server)
      .delete('/job-posting/999')
      .expect(200, done);
  });
});
