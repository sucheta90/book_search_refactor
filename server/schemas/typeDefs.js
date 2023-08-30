const typeDefs = `
type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [String] 

}


type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    user(userId: ID!): User
    savedBooks(userId: ID!): [Book]
} 
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, description: String!,bookId: String!, image: String!, link: String!, title: String!, authors: String!  ): Book
    deleteBook(userId: ID!, bookId: ID!): Book
}
`;

module.exports = typeDefs;
