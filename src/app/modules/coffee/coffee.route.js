import { Router } from "express";
import { CoffeeControllers } from "./controller.js";

const router = Router();

router.get("/coffees", CoffeeControllers.getCoffees);
router.get("/coffee/:id", CoffeeControllers.getSingleCoffee);
router.patch("/coffee/:id", CoffeeControllers.updateCoffee);
router.delete("/coffee/:id", CoffeeControllers.deleteaCoffee);
router.post("/coffees", CoffeeControllers.createMultipleCoffee);
router.post("/create-coffee", CoffeeControllers.createCoffee);

export const coffeeRoutes = router;
