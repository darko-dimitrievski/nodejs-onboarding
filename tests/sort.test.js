const request = require('supertest');
const app = require('../app');

describe('POST /api/v1/sort', () => {
  it('returns sorted array', async () => {
    const res = await request(app)
      .post('/api/v1/sort')
      .send({ strings: ['pear', 'apple', 'banana'] });

    expect(res.statusCode).toBe(200);
    expect(res.body.sorted).toEqual(['apple', 'banana', 'pear']);
  });

  it('returns 400 for invalid input', async () => {
    const res = await request(app)
      .post('/api/v1/sort')
      .send({ strings: 'not-an-array' });

    expect(res.statusCode).toBe(400);
  });
});