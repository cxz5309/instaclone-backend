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

export function protectedResolver(ourResolver){
    console.log(1);
    return function(root, args, context, info){
        console.log(2);
        if(!context.loggedInUser){
            console.log(3);
            const query = info.operation.operation === "query"
            if(query){
                console.log(4);
                return null;
            }
            else{
                console.log(5);
                return{
                    ok:false,
                    error:"Please login to perform this action"
                };
            }
        }
        console.log(6);
        return ourResolver(root, args, context, info);
    }
}