import express from "express";
import { login, logout, getUser, myProfile, contact, updateUser, addTimeline, addProject, deleteTimeline, deleteProject } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);
userRouter.route("/user").post(getUser);
userRouter.route("/me").post(isAuthenticated, myProfile);
userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

userRouter.route("/contact").post(contact);