import ProductRoutes from "./product";
import { Application } from "express";

export default (app: Application) => {
  ProductRoutes(app);
};
