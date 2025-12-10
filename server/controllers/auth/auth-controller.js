const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Input validation
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if user exists with the same email
    const checkUserByEmail = await User.findOne({ email });
    if (checkUserByEmail)
      return res.status(400).json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    // Check if user exists with the same userName
    const checkUserByUserName = await User.findOne({ userName });
    if (checkUserByUserName)
      return res.status(400).json({
        success: false,
        message: "Username is already taken! Please try a different username",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.error("Registration error:", e);

    // Handle mongoose validation errors
    if (e.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error: Please check your input",
      });
    }

    // Handle duplicate key errors from MongoDB - can be in different places
    const errorCode = e.code || (e.errorResponse && e.errorResponse.code);
    if (errorCode === 11000 || errorCode === "E11000") {
      const keyPattern =
        e.keyPattern || (e.errorResponse && e.errorResponse.keyPattern) || {};
      const keyValue =
        e.keyValue || (e.errorResponse && e.errorResponse.keyValue) || {};

      // Find the conflicting field
      const field = Object.keys(keyPattern)[0] || Object.keys(keyValue)[0];
      const friendlyField =
        field === "userName" ? "username" : field || "field";

      return res.status(400).json({
        success: false,
        message: `This ${friendlyField} is already taken. Please choose a different ${friendlyField}.`,
      });
    }

    // Generic error for any other issues
    res.status(500).json({
      success: false,
      message: "An error occurred during registration. Please try again.",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout

const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });

  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
