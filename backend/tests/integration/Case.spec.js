const request = require('supertest');
const app = require ('../../src/app');
const connection = require('../../src/database/connection');

describe('CREATE CASE', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new Case', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '6dee95e2')
      .send({
        title: "Supertest",
        description: "Supertest",
        value: 0
      });

    expect(response.body).toHaveProperty('id');
  });
  
  it('should be able to create a new Case', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '6dee95e2')
      .send({
        title: "Supertest",
        description: "Supertest",
        value: 0
      });

    expect(response.body).toHaveProperty('id');
  });
})