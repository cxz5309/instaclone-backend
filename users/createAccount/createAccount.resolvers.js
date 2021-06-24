import client from "../../client"
import bcrypt from "bcrypt"
export default{
    Mutation: {
        createAccount: async (_, {firstName, lastName, username, email, password,}) => {
            try{
                //유저네임 또는 이메일 DB 체크 
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [{
                                username: username,
                            },
                            {
                                email: email,
                            }
                        ]
                    }
                });
                if(existingUser){
                    throw new Error("this username/password is already taken.");
                }
                //패스워드 해슁
                const hashPassword = await bcrypt.hash(password, 10);
                //저장, user반환
                return await client.user.create({
                    data: {
                        username,
                        email,
                        firstName,
                        lastName,
                        password : hashPassword
                    }
                });
            }
            catch(error){
                return error;
            }
        },
    }
}