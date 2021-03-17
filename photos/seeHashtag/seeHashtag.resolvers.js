import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default{
    Query:{
        seeHashtag:(_, {hashtag}) => 
        client.hashtag.findUnique({
            where:{
                hashtag,
            }
        })
    }
}