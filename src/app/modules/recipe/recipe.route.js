import { Router } from "express";
import { RecipeControllers } from "./recipe.controller.js";

const router = Router();

router.get("/recipes", RecipeControllers.getRecipes);
router.get("/recipe/:id", RecipeControllers.getSingleRecipe);
router.patch("/recipe/:id", RecipeControllers.updateRecipe);
router.delete("/recipe/:id", RecipeControllers.deleteaRecipe);
router.post("/recipes", RecipeControllers.createMultipleRecipe);
router.post("/create-recipe", RecipeControllers.createRecipe);

export const recipeRoutes = router;
