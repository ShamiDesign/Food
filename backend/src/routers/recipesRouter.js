import express from "express";
import { RecipeModel } from "../models/RecipesSchema.js";
import multer from "multer"; // for upload image

const router = express.Router();

// for upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ===========================================================
// Get All items
router.get("/", async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});
// ===========================================================
// Add item
router.post("/",upload.single("image"), async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
     const image = `/uploads/${req.file.filename}`;
    if (!title || !ingredients || !instructions || !image) {
      return res.status(400).json("Requierd filds");
    }
    const newRecipe = await RecipeModel.create({
      title,
      ingredients,
      instructions,
      image,
    });
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});
// ===========================================================
// Update item
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, instructions, image } = req.body;
  try {
    const updateRecipe = await RecipeModel.findByIdAndUpdate(
      id,
      {
        title,
        ingredients,
        instructions,
        image,
      },
      { new: true, runValidators: true },
    ); // to return data After updated
    if (!updateRecipe) {
      res.status(404).json("Can't update recipe");
    }
    res.status(200).json(updateRecipe);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});
// ===========================================================
// Deleted item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRecipe = await RecipeModel.findByIdAndDelete(id);
    if (!deleteRecipe) {
      res.status(404).json("Can't find recipe");
    }
    res.status(200).json("Deleted recipe");
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default router;
