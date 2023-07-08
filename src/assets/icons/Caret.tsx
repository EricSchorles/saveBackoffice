import { CaretIconProps } from "@utils/types/icons.types";
import { FunctionComponent } from "react";

const CaretIcon: FunctionComponent<CaretIconProps> = (
  props: CaretIconProps
) => {
  const CaretClassName = () => {
    let className = "";
    String().match;
    const isDirection = props.direction.includes;
    if (isDirection("up")) {
      className = "rotate-180";
    }
    if (isDirection("left")) {
      className = "rotate-90";
    }
    if (isDirection("right")) {
      className = "-rotate-90";
    }
    return className;
  };
  return (
    <svg
      className={`${CaretClassName()} w-6 h-6`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default CaretIcon;
