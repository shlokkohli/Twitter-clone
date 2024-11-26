import { Router } from "express";
import { signupUser, loginUser, logoutUser } from '../controllers/auth.controller.js'

const router = Router();

router.get("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


export default router;