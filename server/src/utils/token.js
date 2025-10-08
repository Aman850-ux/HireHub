import jwt from "jsonwebtoken";

export const genAuthToken =  (user, res) => {
  try {
    const token =  jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("LoginKey", token, {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      sameSite: "lax",
      httpOnly: true,
    });
    
  } catch (error) {
    console.log("Error in Token Creation", error);
    
  }
};