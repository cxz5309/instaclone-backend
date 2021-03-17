import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default{
    Query:{
        seePhoto:(_, {id})=> client.photo.findUnique({
            where:{
                id,
            }
        })
    }
}