const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  country: String,
  fullName: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Brand', brandSchema);
