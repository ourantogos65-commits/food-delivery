
 import { Router } from "express";
import { login, signUp } from "../controlled/userControlled.js";

export const useRouter = Router();

useRouter
.post("/signup", signUp)
.post("/signin", login);



