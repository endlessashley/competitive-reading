const { AuthenticationError } = require('apollo-server-express');
const { User, Book, Category, ReadBook } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
          path: 'readBooks.books',
          populate: 'category'
        });

        user.readBooks.sort((a, b) => b.readDate - a.readDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    readBook: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'readBooks.books',
          populate: 'category'
        });

        return user.readBooks.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const readBook = new ReadBook({ books: args.books });
      const line_items = [];

      const { books } = await readBook.populate('books').execPopulate();

      for (let i = 0; i < books.length; i++) {
        const book = await stripe.books.create({
          name: books[i].name,
          author: books[i].author,
          images: [`${url}/images/${books[i].image}`]
        });

        // const price = await stripe.prices.create({
        //   book: book.id,
        //   unit_amount: books[i].price * 100,
        //   currency: 'usd',
        // });

        line_items.push({
          points: points.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addReadBook: async (parent, { books }, context) => {
      console.log(context);
      if (context.user) {
        const readBook = new ReadBook({ books });

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
    updateBook: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Book.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
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
