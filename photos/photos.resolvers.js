import client from "../client"

export default {
    Photo: {
        user: ({userId}) => {
            return client.user.findUnique({
                where: {
                    id: userId,
                },
            });
        },
        hashtags: ({id}) => {
            return client.hashtag.findMany({
                where: {
                    photos: {
                        some: {
                            id,
                        },
                    },
                },
            })
        },
        likes:({id}) =>{
            return client.like.count({
                where:{photoId: id}
            })
        },
        comments: ({id}) => client.comment.count({where:{photoId:id}}),
        isMind: ({userId}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false;
            }
            return userId === loggedInUser.id
        },
    },

    Hashtag: {
        photos: ({id}, {page}, {loggedInUser}) => {
            return client.hashtag.findUnique({
                where: {
                    id
                }
            }).photos()
        },
        totalPhotos: ({id}) => {
            return client.photo.count({
                where: {
                    hashtags: {
                        some: {
                            id,
                        },
                    },
                }
            });
        }
    }
}