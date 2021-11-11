import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query getBooks($category: ID) {
    books(category: $category) {
      _id
      name
      author
      points
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($books: [ID]!) {
    checkout(books: $books) {
      session
    }
  }
`;

export const QUERY_ALL_BOOKS = gql`
  {
    books {
      _id
      name
      author
      points
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
query user
  {
    user {
      firstName
      lastName
      readBooks {
        _id 
        readDate
        bookId
          name
          author
          points
      }
    }
  }
`;


