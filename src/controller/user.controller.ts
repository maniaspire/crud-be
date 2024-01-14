import { Request, ResponseToolkit } from "hapi";
import serviceFactory from "../services/serviceFactory";
import { UserService } from "../services";

export class UserController {

    private service: UserService;

    constructor() {
        this.service = serviceFactory.getService<UserService>(UserService.name)
    }

    async list(request: Request, h: ResponseToolkit) {
        return await this.service.listUser();
    }

    async create(request: Request, h: ResponseToolkit) {
        return await this.service.createUser(request.payload);
    }


    async update(request: Request, h: ResponseToolkit) {
        return await this.service.updateUser(request.params.id, request.payload)
    }


    async delete(request: Request, h: ResponseToolkit) {
        return await this.service.deleteUser(request.params.id);
    }
}