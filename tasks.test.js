const request = require('supertest');
const app = require('../index');
const store = require('../data/tasksData');

beforeEach(() => {
  store._reset();
});

describe('Tasks API', () => {
  test('should create, list, update and delete a task', async () => {
    // create
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Test task' })
      .expect(201);
    expect(createRes.body).toHaveProperty('id');
    expect(createRes.body.title).toBe('Test task');

    // list
    const listRes = await request(app).get('/tasks').expect(200);
    expect(Array.isArray(listRes.body)).toBe(true);
    expect(listRes.body.length).toBe(1);

    const id = createRes.body.id;

    // update
    const updateRes = await request(app)
      .put(`/tasks/${id}`)
      .send({ status: 'concluida' })
      .expect(200);
    expect(updateRes.body.status).toBe('concluida');

    // delete
    const delRes = await request(app).delete(`/tasks/${id}`).expect(200);
    expect(delRes.body).toHaveProperty('message');
  });

  test('validation should fail on create without title', async () => {
    await request(app)
      .post('/tasks')
      .send({})
      .expect(400);
  });

  test('404 on updating non-existent task', async () => {
    await request(app)
      .put('/tasks/999')
      .send({ title: 'x' })
      .expect(404);
  });
});
