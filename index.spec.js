const supertest = require('supertest');
const app = require('./index.js');

describe('test root path', () => {
  test('Should response get method', () => {
    return supertest(app).get('/').expect(200);
  });
});
