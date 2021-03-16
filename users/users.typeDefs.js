import {gql} from "apollo-server-express";

export default gql`
    type User{
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createAt: String!
        updatedAt: String!
        bio: String
        avatar: String
        following: [User]
        followers: [User]
    }
`;