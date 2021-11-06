const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Book {
    _id: ID
    name: String
    author: String
    image: String
    points: Int
    category: Category
  }

  type ReadBook {
    _id: ID
    readDate: String
    books: [Book]
  }

  type Checkout {
    session: ID
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    readBooks: [ReadBook]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    books(category: ID, name: String): [Book]
    book(_id: ID!): Book
    user: User
    readBook(_id: ID!): ReadBook
    checkout(books: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addReadBook(books: [ID]!): ReadBook
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Book
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
