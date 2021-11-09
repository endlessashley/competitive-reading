const mongoose = require('mongoose');

const { Schema } = mongoose;

const readBookSchema = new Schema({
  readDate: {
    type: Date,
    default: Date.now
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const ReadBook = mongoose.model('ReadBook', readBookSchema);

module.exports = ReadBook;
