const request = require('supertest');
const { server } = require('../../../app-domain-model/app');
const { mockParams } = require('../mocks');

test('POST /job-posting', done => {
  request(server)
    .post('/job-posting')
    .send({ jobPosting: mockParams })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(201, done);
});
