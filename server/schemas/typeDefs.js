const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

input BookData {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String

}

type Auth {
    token: ID!
    user: User
  }

type Query {
    me(userId: ID!): User
    
} 
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookData): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;
