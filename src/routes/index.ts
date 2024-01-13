import { Server } from "hapi";
import appRoute from "./app.route";
import userRoute from "./user.route";

export default {
    name: 'Routes',
    register: (server: Server) => {
        server.register(appRoute);
        server.register(userRoute, {routes: {prefix: '/user'}})
    }
}