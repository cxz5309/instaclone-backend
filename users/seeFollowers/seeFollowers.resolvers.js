import client from "../../client";
import {protectedResolver} from "../users.utils";

export default {
    Query: {
        seeFollowers:async(_, {username, page})=>{
            //방법1 유저찾고 팔로워 찾기
            //const aFollowers = 
            // await client.user
            // .findUnique({
            //     where:{ username }
            // })
            // .followers();
            //방법2 팔로잉하고있는 유저 전체를 찾기
            // const bFollowers = await client.user.findMany({
            //     where:{
            //         some:{
            //             username,
            //         }
            //     }
            // })
            //*방법3* 페이지네이션 
            const ok = await client.user.findUnique({
                where:{username},
                select:{id:true},    
            });
            if(!ok){
                return {
                    ok:false,
                    error:"User not found",
                }
            }
            const followers = await client.user
            .findUnique({
                where:{username}
            })
            .followers({
                take:5,
                skip:(page-1) * 5,
            });
            //토탈 팔로워를 찾을때 findMany쿼리를 이용하면 너무 많은 비용이 발생한다
            // const totalFollowers = await client.user
            // .findMany({where:{following:{some:{username}}}})

            //count 쿼리가 비용이 적게 발생한다
            const totalFollowers = await client.user
            .count({where:{following:{some:{username}}}})

            return {
                ok:true,
                followers,
                totalPages: Math.ceil(totalFollowers/5),
            }
        }
    }
}