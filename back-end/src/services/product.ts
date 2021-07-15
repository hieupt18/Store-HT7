import { LIST } from "../constants/constants";
let lodash = require("lodash");

export const listAllProduct = () => {
  return LIST;
};

export const listFindProduct = () => {
  const list5FirstProfuct = lodash.slice(LIST, 1, 5);
  return list5FirstProfuct;
};
