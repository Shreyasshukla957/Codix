import express , {Router} from "express";
import {Register ,login } from "../controllers/auth.controller.js";

const authRouter:Router = express.Router();

authRouter.post("/Register",Register);
authRouter.post("/login",login);
// authRouter.post("/logout",logout);
// authRouter.get("/getProfile",getProfile);