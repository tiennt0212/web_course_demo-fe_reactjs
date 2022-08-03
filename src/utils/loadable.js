import { lazy } from "react";

const loadable = (importFunc) => {
  return lazy(importFunc);
};

export default loadable;