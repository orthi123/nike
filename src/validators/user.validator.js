import { z } from 'zod';

const userSignupSchema = z.object({
  username: z.string().min(5),
  name: z.string().min(5),
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Password must contain at least one lowercase letter,one uppercase letter,one number and at least 8 chacaters long '
    ),
});
const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { userSignupSchema, userSigninSchema };
