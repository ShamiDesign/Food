import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true, // for update date Auto
  },
);

export const RecipeModel = mongoose.model("Recipe", recipeSchema);
