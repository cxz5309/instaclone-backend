import client from "../../client";
import { NEW_MESSAGE } from "../../constants";
import pubsub from "../../pubub";
import { protectedResolver } from "../../users/users.utils";

export default{
    Sucscription: {
        roomUpdates: {
            subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
        }
    }
}