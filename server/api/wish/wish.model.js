const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishSchema = new mongoose.Schema({
  editionId: {
    type: Schema.Types.ObjectId,
    ref: 'Edition',
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  warehauseId: {
    type: Schema.Types.ObjectId,
    ref: 'Warehause',
    require: true
  },
  wishDate: Date,
  haveDate: {
    type: Date,
    default: undefined
  },
  hadDate:{
    type: Date,
    default: undefined
  },
  estate: Number,
  birthdayLock: Boolean,
  amazonId: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Wish', wishSchema);
