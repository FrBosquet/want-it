const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const editionSchema = new mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    require: true
  },
  name: String,
  features: [Object]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Edition', editionSchema);
