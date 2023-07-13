import { Router } from "express";
import { signin, getSignin, signup, logout } from "../controllers/authController.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.js";
import { signupSchemaValidation } from "../middlewares/signupSchemaValidation.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const authRouter = Router()
authRouter.post("/sign-in", userSchemaValidation, signin)
authRouter.get("/sign-in", validateAuth, getSignin)
authRouter.post("/sign-up", signupSchemaValidation, signup)
authRouter.delete("/logout", validateAuth, logout)

export default authRouter