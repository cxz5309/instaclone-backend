import jwt from "jsonwebtoken"
import client from "../client"

export const getUser = async(token)=>{
    try{
        if(!token){
            return null;
        }
        const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);
        const user = await client.user.findUnique(
            {
                where:{id:verifiedToken.id}
            });
        if(user){
            return user;
        }else{
            return null;
        }
    }
    catch{
        return null;
    }
}

export const protectResolver = (ourResolver) =>(root, args, context, info) =>{
    if(!context.loggedInUser){
        return{
            ok:false,
            error:"Please login to perform this action"
        };
    }
    return ourResolver(root, args, context, info);
}
