const request = require('supertest');
const app = require('../app');

describe('JWT Auth', () => {
  describe('POST /api/v1/login', () => {
    it('should return 400 if username or password is missing', async () => {
      const res = await request(app)
        .post('/api/v1/login')
        .send({ username: 'darko' });

      expect(res.statusCode).toBe(400);
      expect(res.body.msg).toBe('Please provide both username and password');
    });

    it('should return 200 and a token if login is successful', async () => {
      const res = await request(app)
        .post('/api/v1/login')
        .send({ username: 'darko', password: 'darko' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });

  describe('GET /api/v1/dashboard', () => {
    let token;

    beforeAll(async () => {
      const res = await request(app)
        .post('/api/v1/login')
        .send({ username: 'darko', password: 'darko' });
      token = res.body.token;
    });

    it('should return 401 if no token provided', async () => {
      const res = await request(app)
        .get('/api/v1/dashboard');

      expect(res.statusCode).toBe(401);
    });

    it('should return 200 and secret message if token is valid', async () => {
      const res = await request(app)
        .get('/api/v1/dashboard')
        .set('Authorization', `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.msg).toContain('Hello, darko');
    });
  });
});
