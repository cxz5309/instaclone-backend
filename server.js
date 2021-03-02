import { PrismaClient } from "@prisma/client";
import {ApolloServer, gql} from "apollo-server";

const client = new PrismaClient();

// The GraphQL schema
const typeDefs = gql`
  type Movie{
    id:Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }
  type Mutation{
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: String!):Boolean
  }
  type Query {
    movies: [Movie]
    movie: Movie
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: () =>({title:"hello", year:2021}),
  },
  Mutation: {
    createMovie: (_, {title, year, genre})=>{
      client.movie.create({
          title:"1",
          year,
          genre,
      })
    },
    deleteMovie: (_, {title}) =>{
      console.log(title);
      return true;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log(`🚀 Server ready at http://localhost:4000/`);
});

// import { PrismaClient } from "@prisma/client";
// import {ApolloServer, gql} from "apollo-server";

// const client = new PrismaClient();

// // The GraphQL schema
// const typeDefs = gql`
//   type Movie{
//     id:Int!
//     title: String!
//     year: Int!
//     genre: String
//     createdAt: String!
//     updateAt: String!
//   }
//   type Query {
//     movies: [Movie]
//     Movie: Movie
//   }
//   type Mutation{
//     createMovie(title: String!, year: Int!, genre: String):Movie
//     deleteMovie(id: String!):Boolean
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     movies: () => client.movie.findMany(),
//     movie: () =>({title:"hello", year:2021})
//   },
//   Mutation: {
//     createMovie: (_, {title, year, genre})=>{
//       client.movie.create({
//         data:{
//           title,
//           year,
//           genre,
//       }})
//     },
//     deleteMovie: (_, {title}) =>{
//       console.log(title);
//       return true;
//     },
//   }
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.listen().then(() => {
//   console.log(`🚀 Server ready at http://localhost:4000/`);
// });