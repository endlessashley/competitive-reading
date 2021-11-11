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
    points: Int
    category: Category
  }

  type ReadBook {
    _id: ID
    readDate: String
    bookId: ID
    name: String
    author: String
    points: Int
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
    books(category: ID, name: String, author: String, points: Int): [Book]
    book(_id: ID!): Book
    user: User
    readBook(_id: ID!): ReadBook
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addReadBook(bookId: ID!, name: String!, author: String!, points: Int): ReadBook
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
