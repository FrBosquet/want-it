const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  name: String,
  email: String,
  country: String,
  facebookId: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('User', userSchema);
