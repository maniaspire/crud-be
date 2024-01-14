import { UserModel } from "../model";
import { DBService } from "./coreServices";

export class UserService extends DBService {

    listUser() {
        return this.find(UserModel);
    }

    createUser(data: any) {
        return this.save(UserModel, data);
    }

    updateUser(id: string, data: any) {
        return this.findByIdAndUpdate(UserModel, id, data);
    }

    deleteUser(id: string) {
        return this.deleteById(UserModel, id);
    }
}