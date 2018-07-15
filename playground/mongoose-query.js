const Todo = require('../server/model/Todo');

let id = '5b447827a5f8421784a1a143';

Todo.find({
   _id: id
}).then(todos => console.log(todos));

Todo.findOne({
   _id: id
}).then(todo => console.log(todo));

Todo.findById(id).then(todo => console.log(todo));

