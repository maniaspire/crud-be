import { Server } from "hapi";
import routes from "./routes";

const startApp = async () => {
    const app = new Server({
        port: 3001,
        host: '0.0.0.0'
    });

   await app.register(routes);

    await app.start();
    console.log(`Server running at ${app.settings.port}`)
}

startApp()