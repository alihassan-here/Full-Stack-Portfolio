import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

dotenv.config({
    path: "./backend/config/config.env"
});

connectDatabase();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})