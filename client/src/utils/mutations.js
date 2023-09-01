import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email
        password
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        email
        password
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookData) {
    saveBook(book: $book) {
      user
      savedBooks {
        authors
        title
        description
        bookId
        image
        link
      }
    }
  }
`;
