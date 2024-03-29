import { loadFilesSync, makeExecutableSchema, mergeTypeDefs, mergeResolvers } from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`)

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);

// const schema = makeExecutableSchema({typeDefs, resolvers});
// export default schema;