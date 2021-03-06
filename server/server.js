const express = require('express');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');
const _ = require('lodash');
const Todo = require('./model/Todo');
const User = require('./model/User');

let app = express();
let port = process.env.port || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   let todo = new Todo({
      text: req.body.text
   });

   todo.save().then((doc) => res.send(doc), (e) => res.send(e));
});

app.get('/todos', (req, res) => {
   Todo.find({}).then(todos => res.send({todos}), e => res.send(e));
});

app.get('/todo/:id', (req, res) => {
   let id = req.params.id;

   if(!ObjectID.isValid(id))
   {
      res.status(404).send();
   }

   Todo.findById(id).then((todo) => {
      if(!todo)
      {
         res.status(404).send();
         return;
      }

      res.send({todo});

   }, (e) => {
      res.status(400).send();
   });
});

app.delete('/todo/:id', (req, res) => {
   let id = req.params.id;

   if (!ObjectID.isValid(id)) {
      res.status(404).send();
   }

   Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
         res.status(404).send();
         return;
      }

      res.send({todo});
   }, (e) => {
      res.status(400).send();
   })
});

app.patch('/todo/:id', (req, res) => {
   let id = req.params.id;
   let body = _.pick(req.body, ['text', 'completed']);

   if (!ObjectID.isValid(id)) {
      res.status(404).send();
   }

   if (_.isBoolean(body.completed) && body.completed) {
      body.completeAt = new Date().getTime();
   } else {
      body.completed = false;
      body.completeAt = null;
   }

   Todo.findOneAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
         res.status(404).send();
      }

      res.send({todo});
   }, (e) => {
      res.status(400).send();
   });
});

app.listen(port, () => {
   console.log(`Server started on ${port}`);
});

module.exports.app = app;