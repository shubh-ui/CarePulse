import { ID, Query, Users } from "node-appwrite"
import { users } from "../appwrite.config"

export const creatUser = async (user: CreateUserParams) => {
    try {

        const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name)
        console.log(newUser);
    }
    catch (error: any) {
        if (error && error?.code == 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])

            return documents?.users[0];
        }
        console.log(error)
    }
}

export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);

        return user;
    }
    catch (error) {
        console.log(error);
    }
}