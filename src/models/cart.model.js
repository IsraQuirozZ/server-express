import { model, Schema } from "mongoose";

const collection = "carts";
let schema = new Schema({
  products: { type: Array, required: true },
});

const Cart = model(collection, schema);
export default Cart;
