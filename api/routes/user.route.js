import express from 'express';
import { test } from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUsers.js';
const router = express.Router();

router.get('/test' , test);
router.put('/update/:userId' ,verifyToken, updateUser);

export default router;