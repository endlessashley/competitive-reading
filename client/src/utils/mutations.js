import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_READBOOK = gql`
  mutation addReadBook($bookId: ID!, $name: String!, $author: String! $points: Int ) {
    addReadBook(bookId: $bookId, name: $name, author: $author, points: $points) {
      
        bookId
        name
        author
        points

      }
    }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
