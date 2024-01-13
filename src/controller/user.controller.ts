import { Request, ResponseToolkit } from "hapi";
import serviceFactory from "../services/serviceFactory";
import { UserService } from "../services";

export class UserController {
    list(request: Request, h: ResponseToolkit) {
        const service = serviceFactory.getService<UserService>(UserService.name)
        return service.listUser();
    }
}