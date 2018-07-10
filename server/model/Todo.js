const mongoose = require('../db/connect');

const TodoSchema = mongoose.Schema({
   text: {
      type: String,
      required: true
   },
   completed: {
      type: Boolean,
      default: false
   },
   completeAt: {
      type: Number
   }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);