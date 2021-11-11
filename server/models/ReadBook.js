const mongoose = require('mongoose');

const { Schema } = mongoose;

const readBookSchema = new Schema({
  readDate: {
    type: Date,
    default: Date.now
  },
  bookId: {
    type: String,
    required: true,
    trim: true
  }
});

const ReadBook = mongoose.model('ReadBook', readBookSchema);

module.exports = ReadBook;
