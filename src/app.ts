import { Server } from "hapi";
import routes from "./routes";
import { connectMongoDB } from "./helpers/Mongoose";

const startApp = async () => {
    const app = new Server({
        port: 3001,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    await app.register(routes);

    await connectMongoDB();

    await app.start();

    console.log(`Server running at ${app.settings.port}`)
}

startApp()