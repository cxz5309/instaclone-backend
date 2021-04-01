import client from "../../client";
import { uploadToS3 } from "../../Shared/shared.utils";
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
                    //get or create Hashtags
                    const fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");
                    return await client.photo.create({
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