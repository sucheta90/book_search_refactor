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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        email
        password
        username
      }
      token
    }
  }
`;

// export const SAVE_BOOK = gql`
//   mutation Mutation {
//     saveBook {
//       savedBooks {
//         description
//         authors
//         title
//         bookId
//         image
//         link
//       }
//     }
//   }
// `;
