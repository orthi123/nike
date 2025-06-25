import { asyncHandler } from '../../utils/asyncHandler.js';
import { User } from '../../models/user.model.js';

const signUp = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;
  return res.json({ user });//package laagbe jod
});

export { signUp };
