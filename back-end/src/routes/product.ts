import { Application } from "express";
import { ProductController } from "../controllers/product";

export default (app: Application) => {
  app.get("/product", ProductController.list);
};
