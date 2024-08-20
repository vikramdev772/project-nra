import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { getAllUsers } from "../controllers/auth.controller.js"; 
import { clearDatabase } from '../controllers/clear.js'

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
// curl -X POST http://localhost:5000/api/auth/signup -H "Content-Type: application/json" -d '{"firstName": "John", "lastName": "Doe", "mobileNumber": "1234567890", "email": "john.doe@example.com", "createPassword": "Password123!", "confirmPassword": "Password123!"}'


router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);


router.get("/getdata", getAllUsers);
// curl -X GET http://localhost:5000/api/auth/getdata


router.delete('/clear', clearDatabase);
// curl -X DELETE http://localhost:5000/api/auth/clear

export default router;
