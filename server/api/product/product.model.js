const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  brandId: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    require: true
  },
  name: String,
  ref: String,
  tags: [String]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Product', productSchema);
