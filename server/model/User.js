const mongoose = require('../db/connect');

const UserSchema = mongoose.Schema({
   email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
   }
});

const User = module.exports = mongoose.model('User', UserSchema);