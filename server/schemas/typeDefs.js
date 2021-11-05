const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Book {
    _id: ID
    title: String
    author: String
    image: String
    points: Int
    category: Category
  }

  type ReadBooks {
    _id: ID
    ReadDate: String
    books: [Book]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
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
    order(_id: ID!): Order
    checkout(books: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(books: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Book
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
