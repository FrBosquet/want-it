const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: String,
  name: String,
  email: String,
  country: String,
  facebookId: String,
  photoURI: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('User', userSchema);
