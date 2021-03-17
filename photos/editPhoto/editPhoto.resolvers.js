import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { processHashtags } from "../photos.utils";

export default{
    Mutation:{
        editPhoto: protectedResolver(async(_,{id, caption}, {loggedInUser})=>{
            const oldPhoto = await client.photo.findFirst({
                where:{
                    id,
                    userId:loggedInUser.id
                },
                include:{
                    hashtags:{
                        select:{
                            hashtag:true,
                        }
                    }
                }
            });
            if(!oldPhoto){
                return {
                    ok:false,
                    error:"Photo not found."
                }
            }
            console.log(oldPhoto.hashtags);
            const tmp = await client.photo.findFirst({
                where:{
                    id:1,
                    userId:loggedInUser.id
                },
                include:{
                    hashtags:{
                        select:{
                            hashtag:true,
                        }
                    }
                }});
            console.log(tmp.hashtags);

            const photo = await client.photo.update({
                where:{
                    id
                },
                include:{
                    hashtags:{
                        select:{
                            hashtag:true,
                        }
                    }
                },
                data:{
                    caption,
                    hashtags:{
                        disconnect: oldPhoto.hashtags,
                        connectOrCreate: processHashtags(caption),
                    }
                }
            });
        })
    }
}