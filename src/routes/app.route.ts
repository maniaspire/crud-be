import { Server, ServerRoute } from "hapi";

const Routes: ServerRoute[] = [{
    method: 'GET',
    path: '/',
    handler: () => `server running`
}, {
    method: 'GET',
    path: '/ping',
    handler: () => `server running`
}, {
    method: '*',
    path: '/{any*}',
    handler: () => `Not Found`
}];

export default {
    name: 'appRoute',
    register: (server: Server) => {
        server.route(Routes);
    }
}