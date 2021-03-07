import {gql} from "apollo-server";

// A map of functions which return data for the schema.
export default gql`
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
    deleteMovie(id: Int!): Movie
    updateMovie(id:Int! year:Int!):Movie
    }
    type Query {
    movies: [Movie]
    movie(id:Int!): Movie
    }
`;