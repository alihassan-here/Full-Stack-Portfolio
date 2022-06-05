import express from 'express';

export const app = express();

import { userRouter } from "./routes/user.js";

app.use(express.json());

app.use('/api/v1', userRouter);