import e from 'express';
import { signUp } from '../controllers/user/user.controller.js';
import validationMiddleware from '../middlewares/validation.middleware.js';
import { userSignupSchema } from '../validators/user.validator.js';

const router = e.Router();

// Route: POST /api/v1/users/signup
router.post('/users/signup',validationMiddleware(userSignupSchema), signUp);

export default router;
