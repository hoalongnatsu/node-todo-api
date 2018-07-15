const express = require('express');
var bodyParser = require('body-parser')
const Todo = require('./model/Todo');
const User = require('./model/User');

let app = express();

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

app.listen(3000, () => {
   console.log(`Server started on 3000`);
});

module.exports.app = app;