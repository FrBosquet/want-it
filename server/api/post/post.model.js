const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  wishId: {
    type: Schema.Types.ObjectId,
    ref: 'Wish',
    require: true
  },
  comment: String,
  photoURI: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Post', postSchema);
