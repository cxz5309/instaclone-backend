import {gql, } from "apollo-server";
import { loadFilesSync, makeExecutableSchema, mergeTypeDefs, mergeResolvers } from "graphql-tools";
import client from "./client"

export const typeDefs = gql`
    type Query{
        hello:String
    }
`;

export const resolvers = {
    Query: {
        hello: () =>"world",
    },
};
const loadedTypes = loadFilesSync();
const loadedResolvers = loadFilesSync()

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;