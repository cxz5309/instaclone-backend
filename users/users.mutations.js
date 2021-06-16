import client from "../client";
import bcrypt from "bcrypt";

export default {
    Mutataion: {
        createAccount: async (__, {
            username,
            email,
            firstName,
            lastName,
            password,
        }) => {
            console.log(1);
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
            //패스워드 해슁
            const hashPassword = await bcrypt.hash(password, 10);
            //저장, user반환
            console.log(hashPassword);
            return client.user.create({
                data: {
                    username,
                    email,
                    firstName,
                    lastName,
                    password: hashPassword,
                }
            });
        }
    }
};