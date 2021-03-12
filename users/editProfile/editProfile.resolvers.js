import client from "../../client";
import bcrypt from "bcrypt";
import { protectResolver } from "../users.utils";

export default{
    Mutation:{
        editProfile: protectResolver(
            async(_,
            {
                firstName, 
                lastName, 
                username,
                email, 
                password: newPassword,
                bio
            }, 
            {loggedInUser})=>{                
                let uglyPassword = null;
                if(newPassword){
                    uglyPassword = await bcrypt.hash(newPassword, 10);
                }
                const updatedUser = await client.user.update({
                    where:{
                        id:loggedInUser.id,
                    },
                    data:{
                        firstName, 
                        lastName, 
                        username, 
                        email, 
                        ...(uglyPassword && {password: uglyPassword})
                    }
                });
                if(updatedUser.id){
                    return {
                        ok: true
                    }
                }else{
                    return {
                        ok:false,
                        error:"Could not update profile"
                    }
                }
            }
        )
    },
};