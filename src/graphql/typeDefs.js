const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    removeUser(input: RemoveUserInput!)
    editUser(input: EditUserInput!)
  }

  type Query {
    welcome: String!
    getAllUsers: [User!]!
    getUserById(id: ID!): User!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    userName: String!
    location: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
    userName: String!
    location: String!
  }

  input EditUserInput {
    email: String!
    password: String
    userName: String
    location: String
  }

  input RemoveUserInput {
    email: String!
    password: String!
  }
`
