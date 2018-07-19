const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

const app = require('./server').app;
const Todo = require('./model/Todo.js');

let todos = [{
   _id: new ObjectID(),
   text: 'This is first text'
}, {
   _id: new ObjectID(),
   text: 'This is second text'
}];

beforeEach((done) => {
   Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
   }).then(() => done());
});

describe('GET /todos', function () {
   it('Should get all todos', (done) => {
      request(app)
         .get('/todos')
         .expect(200)
         .expect((res) => {
            expect(res.body.todos.length).toBe(2)
         })
         .end(done);
   });
});

describe('GET /todos/:id', function () {
   it('Should get todo doc', (done) => {
      request(app)
         .get(`/todo/${todos[0]._id.toHexString()}`)
         .expect(200)
         .expect(res => {
            expect(res.body.todo.text).toBe(todos[0].text);
         })
         .end(done)
   });

   it('Should get 404 not found', (done) => {
      let hexId = new ObjectID().toHexString();

      request(app)
         .get(`/todo/${hexId}`)
         .expect(404)
         .end(done)
   });

   it('Should get 404 for none object id', (done) => {
      request(app)
         .get(`/todo/123`)
         .expect(404)
         .end(done)
   });
});