import { Server, ServerRoute } from "hapi";
import controllerFactory from "../controller/controllerFactory";
import { UserController } from "../controller";

const userController = controllerFactory.getController<UserController>(UserController.name)

const Routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: userController.list
    }
]

export default {
    name: 'userRoute',
    register: (server: Server) => {
        server.route(Routes);
    }
}