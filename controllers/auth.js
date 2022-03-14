const User = require("../models/user");

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  // });

  res.status(200).json({
    success: true,
  });
};
