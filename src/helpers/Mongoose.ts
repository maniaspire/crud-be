import { connect, connection } from "mongoose";

const uri = 'mongodb://localhost:27017'

export const connectMongoDB = async () => {
    await connect(uri, { dbName: 'crud', })
        .then((value) => console.log('connected to monogo'))
        .catch(error => console.log(error.message));
}