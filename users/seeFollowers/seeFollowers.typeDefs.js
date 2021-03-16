import {gql} from "apollo-server-express";

export default gql`
    #Offset Pagination방법
    type SeeFollowersResult{
        ok:Boolean!
        error:String
        followers: [User]
        totalPages:Int
    }
    type Query{
        seeFollowers(username: String!, page:Int!): SeeFollowersResult!
    }
`;