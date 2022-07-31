import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    age: Int
  }

  input UserUpdateInput {
    name: String
    email: String
    age: Int
  }

  input UserCreateInput {
    name: String!
    email: String!
    age: Int
  }

  type Query {
    getUsers: [User]
    getUserById(id: Int!): User
  }

  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: Int!, data: UserUpdateInput): User
    deleteUser(id: Int!): User
  }
`;
