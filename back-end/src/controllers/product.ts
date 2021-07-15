import { listAllProduct, listFindProduct } from "../services/product";

export class ProductController {
  static list = async () => {
    try {
      const res = await listAllProduct();
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  static list5Product = async () => {
    try {
      const res = await listFindProduct();
      return res;
    } catch (e) {
      console.log(e);
    }
  };
}
