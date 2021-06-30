import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
    try{
        if(!token){
            return null;
        }
        const { id } = await jwt.verify(token, process.env.SECRET_KEY);
        const user = await client.user.findUnique({
            where: {id}
        });
        if (user) {
            return user;
        }
        else{
            return null;
        }
    }
    catch{
        return null;
    }
}

//나쁜 방법
// export const protectResolver = (user)=>{
//     if(!user){
//         throw new Error ("You need to login!")
//     }
// }

//덜 나쁜 방법
// export const protectResolver = (user)=>{
//     if(!user){
//         return {
//             ok:false,
//             error:"You need to login!"
//         }
//     }
// }

//es6
// export const protectedResolver = (ourResolver)=>
//     (root, args, context, info)=>{
//         if(!context.loggedInUser){
//             return {
//                 ok:false,
//                 error:"You need to login!"
//             };
//         }
//         return ourResolver(root, args, context, info);
// };

//es5
export function protectedResolver(ourResolver){
    return function(root, args, context, info){
        if(!context.loggedInUser){
            return {
                ok:false,
                error:"You need to login!"
            };
        }
        return ourResolver(root, args, context, info);
    }
}