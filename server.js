require("dotenv").config();
import http from "http";
import express from "express"
import logger from "morgan";
import {ApolloServer} from "apollo-server-express";
import schema, {typeDefs, resolvers} from "./schema"
import {getUser} from "./users/users.utils";
import pubsub from "./pubsub";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  schema,
  resolvers,
  typeDefs,
  context: async({req}) =>{
    if(req){
      return {
          loggedInUser: await getUser(req.headers.token),
        }
    }
  }
});

const app = express();

app.use(logger("tiny"));
apollo.applyMiddleware({app});

//server미들웨어 설정 후에 static 설정 
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  });
