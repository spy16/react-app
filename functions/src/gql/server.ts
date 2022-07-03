import { ApolloServer } from "apollo-server-cloud-functions";
import { Resolvers } from "./generated";
import { typeDefs } from "./typeDefs";

const resolvers: Resolvers = {
  Query: {
    greet: (_, { name }, {}) => {
      var msg = "Hello!";
      if (name) {
        msg = "Hello " + name + "!";
      }

      return {
        message: msg,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
export default server;
