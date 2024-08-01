import asyncHandler from "express-async-handler";
import User from "../models/user.js";

// @desc    Get user Profile
// @route   GET /api/v1/user/id
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json({
      fullname: user.fullname,
      email: user.email,
    });
  } else {
    res.status(404).json({
      data: {
        message: "User not found",
      },
    });
  }
});

export { getUserProfile };
