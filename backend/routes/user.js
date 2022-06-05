import express from "express";
import { login, logout, getUser } from "../controllers/user.js";


export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);
userRouter.route("/user").post(getUser);
userRouter.route("/me").post(getUser);