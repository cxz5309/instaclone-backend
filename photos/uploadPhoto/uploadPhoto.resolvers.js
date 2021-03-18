import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { processHashtags } from "../photos.utils";

export default{
    Mutation: {
        uploadPhoto: protectedResolver(
            async (_, {file, caption}, {loggedInUser}) => {
            {
                if(caption){
                    ///parse caption
                    const hashtagObj = processHashtags(caption);
                    console.log(hashtagObj);
                    //get or create Hashtags
                    return client.photo.create({
                        data:{
                            file,
                            caption,
                            user:{
                                connect:{
                                    id: loggedInUser.id,
                                }
                            },
                            ...(hashtagObj.length > 0 && {
                            hashtags:{
                                connectOrCreate:hashtagObj,
                            },})
                    }
                })
            }
        }}),
    }
}