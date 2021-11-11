const { AuthenticationError } = require('apollo-server-express');
const { User, Book, Category, ReadBook } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    books: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Book.find(params).populate('category');
    },
    book: async (parent, { _id }) => {
      return await Book.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'readBook.books',
          populate: 'category'
        });

        user.readBooks.sort((a, b) => b.readDate - a.readDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    readBook: async (parent, { _id }, context) => {
      console.log(context)
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'readBook.books',
          populate: 'category'
        });

        return user.readBook.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addReadBook: async (parent, { bookId, author, name, points }, context) => {
      
      if (context.user) {
        const readBook = new ReadBook({ bookId, author, name, points });
        console.log(readBook);

        await User.findByIdAndUpdate(context.user._id, { $push: { readBooks: readBook } });

        return readBook;
      }

      throw new AuthenticationError('Not logged in');
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
