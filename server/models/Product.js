import mongoose from "mongoose";

//Creating schema for the database
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: Array, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

//cretaing a model from schema
const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
