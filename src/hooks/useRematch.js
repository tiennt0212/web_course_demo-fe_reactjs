import { useDispatch as useReduxDispatch, useSelector } from "react-redux";

const useDispatch = (selector) => {
  const dispatch = useReduxDispatch();
  return selector(dispatch);
};

export { useDispatch, useSelector };