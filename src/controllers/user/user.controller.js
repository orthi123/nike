import { asyncHandler } from '../../utils/asyncHandler.js';
import {User} from "../../models/user.model.js"

const signUp = asyncHandler(async (req, res) => {
  const user = await User.create(req.body)
  return res.json({user});
});

export { signUp };
