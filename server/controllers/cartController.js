import User from "../models/User.js";

// Update User CartData: /api/cart/update

export const updateCart = async (req, res) => {
  try {
    // req.userId is set by authUser middleware
    const userId = req.userId;

    // Accept raw cart object as the request body:
    // If client sends { itemId: qty, ... } it will be available as req.body
    const cartItems = req.body;

    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
