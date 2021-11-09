const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  points: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
