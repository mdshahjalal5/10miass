import express from "express";
import cors from "cors";
import globalErrorHandler from "./errors/globalError.js";
import notFound from "./errors/notFound.js";
import { recipeRoutes } from "./app/modules/recipe/recipe.route.js";

export const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, welcome to the coffee store");
});

app.use(globalErrorHandler);
app.use(notFound);
