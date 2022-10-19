import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage} from "../controllers/auth.controller.server.js";

const router = Router();

// Dsiplay login Router
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);

// Dsiplay Register Router
router.get('/register', DisplayRegisterPage);
//Process Register Page
router.post('/register', ProcessRegisterPage);

// Process Logout
router.get('/logout', ProcessLogoutPage);


export default router;