import {gql} from "apollo-server-express";

export default gql`
    # Cursor-based Pagination방법
    type SeeFollowingResult{
        ok:Boolean!
        error:String
        following: [User]
    }
    type Query{
        seeFollowing(username: String!, lastId: Int) :SeeFollowingResult!
    }
`;