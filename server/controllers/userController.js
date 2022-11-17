// import User model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  // get one user
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res.status(400).json({ message: "Cannot find user with this id" });
    }
    res.json(foundUser);
  },
};
