import e from 'express';
import { signUp } from '../controllers/user/user.controller.js';

const router = e.Router();

// Route: POST /api/v1/users/signup
router.post('/users/signup', signUp);

export default router;
