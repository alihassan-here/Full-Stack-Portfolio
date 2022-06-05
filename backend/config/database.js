import mongoose from 'mongoose';

export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    }).then((c) => {
        console.log(`Connected to database ${c.connection.host}`);
    }).catch((e) => {
        console.log(`Error connecting to database ${e}`);
    });
};