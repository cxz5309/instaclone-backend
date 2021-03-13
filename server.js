require("dotenv").config();
import {ApolloServer} from "apollo-server";
import schema, {typeDefs, resolvers} from "./schema"
import {getUser, protectResolver} from "./users/users.utils";

const server = new ApolloServer({
  schema,
  resolvers,
  typeDefs,
  context: async({req}) =>{
    return {
        loggedInUser: await getUser(req.headers.token),
        protectResolver
      }
  }
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  });
