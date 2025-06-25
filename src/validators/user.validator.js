import { z } from 'zod';
const userSignupSchema = z.object({
  username: z.string().min(5),
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8).regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
   'password must contain at least one lowercase letter,one uppercase letter,one number,and be at least 8 characters long'
  ),
 
});


const userSigninSchema = z.object({
    email:z.string().email(),
    password:z.string(),
});

export {userSignupSchema,userSigninSchema};