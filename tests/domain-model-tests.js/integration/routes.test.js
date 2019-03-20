const request = require('supertest');
const { server } = require('../../../app-domain-model/app');
const {
  mockParamsGoldWithFeatRemainFeat,
  mockParamsGoldWithoutFeatRemainFeat,
  mockParamsGoldWithoutFeatRemainNormal,
  mockParamsNormal
} = require('../mocks');

test('POST /job-posting 201 when a gold organzation with featured remaining creates a featured job posting', done => {
  request(server)
    .post('/job-posting')
    .send({ jobPosting: mockParamsGoldWithFeatRemainFeat })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(201, done);
});

test('POST /job-posting 501 when a gold organization without featured remaining creates a featured job posting', done => {
  request(server)
    .post('/job-posting')
    .send({ jobPosting: mockParamsGoldWithoutFeatRemainFeat })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(501, done);
});

test('POST /job-posting 201 when a gold organization without featured remaining creates a regular job posting', done => {
  request(server)
    .post('/job-posting')
    .send({ jobPosting: mockParamsGoldWithoutFeatRemainNormal })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(201, done);
});

test('POST /job-posting 201 when a normal organization creates a normal job posting', done => {
  request(server)
    .post('/job-posting')
    .send({ jobPosting: mockParamsNormal })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(201, done);
});
