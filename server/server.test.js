const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('GET /todos', function () {
   it('Should get all todos', (done) => {
      request(app)
         .get('/todos')
         .expect(200)
         .expect((res) => {
            expect(res.body.todos.length).toBe(5)
         })
         .end(done);
   });
})