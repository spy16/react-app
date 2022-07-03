import { gql } from "apollo-server-cloud-functions";

export const typeDefs = gql`
  type Greeting {
    message: String!
  }

  type Query {
    greet(name: String): Greeting!
  }
`;
