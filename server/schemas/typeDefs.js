const typeDefs = `
type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [Strings] 

}

input BookData{
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [Strings] 
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
    user(id: ID!): User
    savedBooks: [Book]
} 
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    add
    saveBook(book: BookData) : bookResponse
    deleteBook(id: ID!): Book
}
`;

module.exports = typeDefs;
