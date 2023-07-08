import { RegisterContext } from "@contexts/steps";
import { useContext } from "react";

const useSteps = () => {
  return useContext(RegisterContext);
};

export default useSteps;
