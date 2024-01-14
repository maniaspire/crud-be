import { Server, ServerRoute } from "hapi";
import controllerFactory from "../controller/controllerFactory";
import { UserController } from "../controller";

const userController = controllerFactory.getController<UserController>(UserController.name)

const Routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: userController.list
    },
    {
        method: 'POST',
        path: '/',
        handler: userController.create
    },
    {
        method: 'PUT',
        path: '/{id}',
        handler: userController.update
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: userController.delete
    }
]

export default {
    name: 'userRoute',
    register: (server: Server) => {
        server.bind(userController);
        server.route(Routes);
    }
}