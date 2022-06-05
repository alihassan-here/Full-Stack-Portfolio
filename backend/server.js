import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";

dotenv.config({
    path: "./backend/config/config.env"
});

connectDatabase();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})